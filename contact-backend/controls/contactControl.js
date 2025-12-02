const Contact = require("../models/contactModel");

exports.sendMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  Contact.addMessage(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json({ message: "Message sent successfully!" });
  });
};
