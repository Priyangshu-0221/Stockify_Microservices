import { model, Schema } from "mongoose";

const HoldingsSchema = new Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const HoldingsModel = model("holdings", HoldingsSchema);

export default HoldingsModel;
