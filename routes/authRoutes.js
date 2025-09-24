const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/giftdb";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Login route
router.post("/login", async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();
    const collection = db.collection("users");

    // Find the current user in the database
    const theUser = await collection.findOne({ email: req.body.email });

    if (theUser) {
      const payload = { user: { id: theUser._id.toString() } };
      const authtoken = jwt.sign(payload, JWT_SECRET);
      return res.status(200).json({ authtoken, userName: theUser.firstName, userEmail: theUser.email });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal server error", details: e.message });
  }
});

module.exports = router;
