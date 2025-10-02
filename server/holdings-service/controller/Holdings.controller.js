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
                res.send("New Holding");
        } catch (err) {
                res.status(500).json(err);
        }
};

export const allHoldings = async (req, res) => {
        const { userId } = req.query;
        const user = await UserModel.findById(userId);
        if (!user) {
                return res.status(404).json({ message: "User not found" });
        }
        let allholdings = await HoldingsModel.find({ owner: user._id });
        res.json(allholdings);
};

export const removeHoldings = async (req, res) => {
        try {
                const { userId } = req.body;
                const user = await UserModel.findById(userId);
                if (!user) {
                        return res.status(404).json({ message: "User not found" });
                }
                const removedHolding = await HoldingsModel.deleteOne({ owner: user._id });
                res.json({ message: "Holding removed successfully" });
        } catch (error) {
                res.status(500).json({ message: "Server error", error: error.message });
        }
};