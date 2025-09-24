// /routes/giftRoutes.js
const express = require("express");
const router = express.Router();
const mongoose = require("../models/db"); // DB connection

// Gift schema and model
const giftSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});
const Gift = mongoose.model("Gift", giftSchema);

// Route: GET /api/gifts  → returns all gifts
router.get("/", async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route: GET /api/gifts/:id  → returns one gift by ID
router.get("/:id", async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    if (!gift) {
      return res.status(404).json({ message: "Gift not found" });
    }
    res.json(gift);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
