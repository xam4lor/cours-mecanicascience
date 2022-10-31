/** Server API listening on '/api' URLs */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Main API index.");
});

// Export module
module.exports = router;
