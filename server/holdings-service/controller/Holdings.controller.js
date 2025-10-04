import HoldingsModel from "../model/Holdings.Model.js";
import UserModel from "../model/User.Model.js";

export const addHoldings = async (req, res) => {
  try {
    const { owner } = req.body;
    const user = await UserModel.findById(owner);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let newHolding = new HoldingsModel({
      name: req.body.name,
      price: req.body.price,
      qty: req.body.qty,
      owner: user._id,
    });
    await newHolding.save();
    user.holdings.push(newHolding._id);
    await user.save();
    res.send("New Holding");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const allHoldings = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let allholdings = await HoldingsModel.find({ owner: user._id });
    res.json(allholdings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const removeHoldings = async (req, res) => {
  try {
    const { userId, id, name } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    let removedHolding;
    
    // If 'name' is provided, delete by stock name (for selling from orders)
    if (name) {
      removedHolding = await HoldingsModel.findOneAndDelete({ 
        name: name, 
        owner: user._id 
      });
      
      if (!removedHolding) {
        return res.status(404).json({ message: "Holding not found for this stock" });
      }
      
      // Remove holding reference from user's holdings array
      await UserModel.findByIdAndUpdate(user._id, {
        $pull: { holdings: removedHolding._id },
      });
    } 
    // Otherwise, delete by _id (for direct holding deletion)
    else if (id) {
      const deleteResult = await HoldingsModel.deleteOne({ _id: id, owner: user._id });
      
      // Check if the holding was actually deleted
      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: "Holding not found or already deleted" });
      }
      
      // Remove holding reference from user's holdings array
      await UserModel.findByIdAndUpdate(user._id, {
        $pull: { holdings: id },
      });
    } else {
      return res.status(400).json({ message: "Either 'id' or 'name' must be provided" });
    }
    
    res.json({ message: "Holding removed successfully" });
  } catch (error) {
    console.error("Error removing holding:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
