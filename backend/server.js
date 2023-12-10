require("dotenv").config();

// Import necessary modules
const express = require("express");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/api"); // Import your API routes file

const Dog = require("./models/dog"); // Import your Dog model

// Initialize AWS S3 client with V3 SDK
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Configure multer to handle file upload
const upload = multer();

// POST route for creating a new dog profile
app.post("/dogs", upload.single("picture"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Prepare to upload to S3
  const key = `${Date.now()}-${req.file.originalname}`;
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: req.file.buffer,
  });

  try {
    await s3Client.send(command);
    const pictureUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    req.body.picture = pictureUrl;

    // Save the new dog with the picture URL
    const newDog = new Dog(req.body);
    await newDog.save();

    res
      .status(201)
      .json({ message: "New dog profile successfully saved", dog: newDog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route for retrieving all dogs
app.get("/dogs", async (req, res) => {
  try {
    const dogs = await Dog.find(); // Retrieve all dogs
    res.status(200).json(dogs);
  } catch (error) {
    console.error("Error fetching dogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
