const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema({

  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  },

  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["approved", "rejected"]
  }

}, { timestamps: true });

module.exports = mongoose.model("Approval", approvalSchema);