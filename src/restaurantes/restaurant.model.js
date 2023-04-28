const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    name: { type: String, required: [true] },
    password: { type: String, required: [true] },
    email: { type: String, required: [true], unique: [true] },
    address: { type: String, required: [true] },
    phone: { type: String, required: [true], unique: [true] },
    mode: {
      type: String,
      required: [true],
      default: "administrador de restaurante",
      enum: ["cliente","administrador de restaurante","domiciliario"]
    },
    isDisable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("restaurants", restaurantSchema);
