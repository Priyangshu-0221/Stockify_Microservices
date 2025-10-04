import axios from "axios";
import WatchListModel from "../model/Watchlist.Model.js";
import UserModel from "../model/User.Model.js";

export const addWatchlist = async (req, res) => {
  try {
    const { id, userId } = req.body;

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid token" });
    }
    const token = authHeader.split(" ")[1];

    const user = await UserModel.findOne({ clerk_id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const stockResponse = await axios.get(`${process.env.NODE_STOCK_BACKEND_URL}/api/stock/${id}`);
    const stockData = stockResponse.data;

    const duplicate = await WatchListModel.findOne({
      company: stockData.company,
      owner: user._id,
    });

    if (duplicate) {
      return res.status(400).json({ message: "Already in watchlist" });
    }

    const watchlistEntry = new WatchListModel({
      stockId: id,
      company: stockData.company,
      open: stockData.open,
      high: stockData.high,
      low: stockData.low,
      prev_close: stockData.prev_close,
      price_change: stockData.price_change,
      volume: stockData.volume,
      owner: user._id,
    });

    await watchlistEntry.save();
    user.watchlist.push(watchlistEntry._id);
    await user.save();

    res.status(201).json({
      message: "Added to watchlist",
      watchlist: watchlistEntry,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add to watchlist", error: error.message });
  }
};

export const getUserWatchlist = async (req, res) => {
  try {
    const { userId } = req.query;

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid token" });
    }
    const token = authHeader.split(" ")[1];

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userWatchlist = await WatchListModel.find({ owner: user._id });

    res.status(200).json({
      success: true,
      count: userWatchlist.length,
      watchlist: userWatchlist
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to get watchlist",
      error: error.message
    });
  }
}

export const removeUserWatchlist = async (req, res) => {
  try {
    const { userId, watchlistId, company } = req.body;

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid token" });
    }
    const token = authHeader.split(" ")[1];

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (!watchlistId && !company) {
      return res.status(400).json({ message: "Either Watchlist ID or Company name is required" });
    }

    console.log("Attempting to remove watchlist item:", { userId, watchlistId, company });

    const user = await UserModel.findById(userId);
    if (!user) {
      console.log("User not found:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user._id);

    let deletedItem;

    // If company name is provided, delete by company name
    if (company) {
      deletedItem = await WatchListModel.findOneAndDelete({
        company: company,
        owner: user._id,
      });
      console.log("Attempting to delete by company name:", company);
    } 
    // Otherwise, delete by ObjectId
    else {
      deletedItem = await WatchListModel.findOneAndDelete({
        _id: watchlistId,
        owner: user._id,
      });
      console.log("Attempting to delete by ID:", watchlistId);
    }

    if (!deletedItem) {
      console.log("Watchlist item not found:", { watchlistId, company, owner: user._id });
      return res.status(404).json({ message: "Watchlist item not found" });
    }

    console.log("Watchlist item deleted:", deletedItem._id);

    // Update user's watchlist array
    await UserModel.findByIdAndUpdate(user._id, {
      $pull: { watchlist: deletedItem._id },
    });

    console.log("User watchlist updated successfully");

    res.status(200).json({
      success: true,
      message: "Watchlist item removed successfully",
      removedItem: deletedItem,
    });
  } catch (error) {
    console.error("Error removing watchlist item:", error);
    res.status(500).json({
      message: "Failed to remove watchlist item",
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
