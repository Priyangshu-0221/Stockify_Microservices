import { model, Schema } from "mongoose";

const WatchListSchema = new Schema(
  {
    stockId: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    open: Number,
    high: Number,
    low: Number,
    prev_close: Number,
    price_change: String,
    volume: Number,
    owner: {
      type: Schema.Types.ObjectId, // Clerk user ID
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const WatchListModel = model("WatchList", WatchListSchema);

export default WatchListModel;
