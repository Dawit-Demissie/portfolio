const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controls/contactControl");

// API route
router.post("/", sendMessage);

module.exports = router;
