const mongoose = require("mongoose");

const driveSchema = new mongoose.Schema(
  {
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("drive", driveSchema);
