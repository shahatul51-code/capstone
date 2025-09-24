// /routes/searchRoutes.js
const express = require("express");
const router = express.Router();
const mongoose = require("../models/db"); // DB connection

// Gift schema and model (reuse same schema as in giftRoutes.js)
const giftSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});
const Gift = mongoose.model("Gift", giftSchema);

// Route: GET /api/search?category=<category>
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category) {
      query.category = category; // filter on category
    }

    const gifts = await Gift.find(query);
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
