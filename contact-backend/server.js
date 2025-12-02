const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoutes = require("./routes/contact");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend (index.html)
app.use("/", express.static(path.join(__dirname, "..")));

// API route
app.use("/api/contact", contactRoutes);

// Default GET
app.get("/", (req, res) => {
  res.send("Backend is running! Use /api/contact");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
