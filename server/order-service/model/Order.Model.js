import { model, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const OrderModel = model("orders", OrderSchema);

export default OrderModel;
