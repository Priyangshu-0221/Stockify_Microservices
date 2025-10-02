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

    const stockResponse = await axios.get(`http://localhost:8001/api/stock/${id}`);
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
    const { userId, watchlistId } = req.body;

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid token" });
    }
    const token = authHeader.split(" ")[1];

    if (!userId || !watchlistId) {
      return res.status(400).json({ message: "User ID and Watchlist ID are required" });
    }

    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const deletedItem = await WatchListModel.findOneAndDelete({
      _id: watchlistId,
      owner: user._id,
    });

    if (!deletedItem) {
      return res.status(404).json({ message: "Watchlist item not found" });
    }

    await UserModel.findByIdAndUpdate(user._id, {
      $pull: { watchlist: watchlistId },
    });

    res.status(200).json({
      success: true,
      message: "Watchlist item removed successfully",
      removedItem: deletedItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove watchlist item",
      error: error.message,
    });
  }
};
