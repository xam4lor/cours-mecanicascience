/** Server API listening on '/api' URLs */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API!"
  });
});

// Export module
module.exports = router;
