const express = require("express");

const {
  approveTask,
  getApprovals
} = require("../controllers/approvalController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/approve", authMiddleware, approveTask);

router.get("/", authMiddleware, getApprovals);

module.exports = router;