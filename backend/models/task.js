const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  title: String,

  description: String,

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);