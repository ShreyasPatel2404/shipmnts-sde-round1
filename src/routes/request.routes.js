const express = require("express");
const router = express.Router();

const routes = require("./user.routes");

// POST /create
router.post("/create", (req, res) => {
  res.status(200).json({
    message: "Route is working",
  });
});

module.exports = router;