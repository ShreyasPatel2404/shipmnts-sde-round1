const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const requestRoutes=require("./request.routes");
const searchRoutes=require("./search.routes");

// Health check route - infra only, not business logic
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

router.get("/user", userRoutes);
router.get("/request","./request.routes");
module.exports = router;

