const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, "Need a user name"] },
    password: { type: Number, required: [true, "Need a password"] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
