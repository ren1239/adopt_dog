const express = require("express");
const router = express.Router();
const Dog = require("../models/dog"); // Assuming your model is in a 'models' directory

// Define API routes and handlers here

// Route to fetch all dogs
router.get("/dogs", (req, res) => {
  Dog.find({}, (err, dogs) => {
    if (err) {
      console.error("Error fetching dogs:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("All dogs:", dogs);
      res.json(dogs);
    }
  });
});

// Other API routes and handlers can be defined here

module.exports = router;
