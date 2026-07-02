const express = require("express");
const router = express.Router();

// Health check route - infra only, not business logic
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});


module.exports = router;
