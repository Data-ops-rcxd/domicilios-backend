const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    name: { type: String, required: [true] },
    address: { type: String, required: [true] },
    category: { type: String, required: [true] },
    isDisable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("restaurants", restaurantSchema);
