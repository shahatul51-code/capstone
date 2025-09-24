// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const giftRoutes = require("./routes/giftRoutes");   // Import gift routes
const searchRoutes = require("./routes/searchRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route
app.get("/", (req, res) => {
  res.send("🎁 Capstone GiftLink Backend Running...");
});

// Mount routes
app.use("/api/gifts", giftRoutes);     // /api/gifts and /api/gifts/:id
app.use("/api/search", searchRoutes);  // /api/search?category=<category>
app.use("/api/auth", authRoutes);      // /api/auth/login, /api/auth/register

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
