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
        const { userId } = req.body;
        const user = await UserModel.findById(userId);
        if (!user) {
                return res.status(404).json({ message: "User not found" });
        }
        const removedOrder = await OrderModel.deleteOne({ owner: user._id });
        res.json({ message: "Order removed successfully" });
};