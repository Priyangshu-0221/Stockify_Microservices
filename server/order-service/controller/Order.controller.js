import OrderModel from "../model/Order.Model.js";
import UserModel from "../model/User.Model.js";

export const addOrder = async (req, res) => {
  try {
    const { owner } = req.body;
    const user = await UserModel.findById(owner);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      owner: user._id,
    });
    await newOrder.save();
    user.orders.push(newOrder._id);
    await user.save();
    res.send("New Order placed");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const allOrder = async (req, res) => {
  const { userId } = req.query;
  const user = await UserModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  let allOrder = await OrderModel.find({ owner: user._id });
  res.json(allOrder);
};

export const removeOrder = async (req, res) => {
  try {
    const { userId, id } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Delete the specific order by both _id and owner
    const removedOrder = await OrderModel.deleteOne({ _id: id, owner: user._id });
    if (removedOrder.deletedCount === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    // Remove order reference from user's orders array
    await UserModel.findByIdAndUpdate(user._id, {
      $pull: { orders: id },
    });
    res.json({ message: "Order removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error removing order", error: err.message });
  }
};
