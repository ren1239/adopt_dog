require("dotenv").config();
AWS_SDK_LOAD_CONFIG = 1;

// Import necessary modules
const express = require("express");
const aws = require("aws-sdk");

const { Upload } = require("@aws-sdk/lib-storage");
const { S3 } = require("@aws-sdk/client-s3");

const multer = require("multer");
const stream = require("stream");
const mongoose = require("mongoose");
const cors = require("cors");

const Dog = require("./models/dog"); // Import your Dog model

// Initialize AWS S3
// JS SDK v3 does not support global configuration.
// Codemod has attempted to pass values to each service client in this file.
// You may need to update clients outside of this file, if they use global config.
aws.config.update({
  // The key apiVersion is no longer supported in v3, and can be removed.
  // @deprecated The client uses the "latest" apiVersion.
  apiVersion: "latest",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});
const s3 = new S3({
  // The key apiVersion is no longer supported in v3, and can be removed.
  // @deprecated The client uses the "latest" apiVersion.
  apiVersion: "latest",

  credentials: {
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  },

  region: process.env.AWS_REGION,
});

// Initialize Express
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Configure multer to handle file upload
const upload = multer();

// POST route for creating a new dog profile
app.post("/dogs", upload.single("picture"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Convert buffer to stream
  const readableStream = new stream.PassThrough();
  readableStream.end(req.file.buffer);

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}-${req.file.originalname}`, // File name you want to save as in S3
    Body: readableStream,
  };

  try {
    const data = await new Upload({
      client: s3,
      params: uploadParams,
    }).done();
    req.body.picture = data.Location; // The URL of the uploaded file

    const newDog = new Dog(req.body);
    const savedDog = await newDog.save();
    res.status(201).json({
      message: "New dog profile successfully saved",
      dog: savedDog,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Listen on the configured port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
