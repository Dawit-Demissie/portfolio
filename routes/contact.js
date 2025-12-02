const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controls/contactControl");
router.get("/", (req, res) => {
  res.send("Contact API is running");
});
router.post("/", sendMessage);
//router.post("/", contactControl);



module.exports = router;
