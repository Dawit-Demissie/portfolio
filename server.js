const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoutes = require("./routes/contact");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "view")));

app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running! Use /api/contact to send messages.");
});

app.listen(5000, () => console.log("Server running on http://localhost:5000/api/contact"));
