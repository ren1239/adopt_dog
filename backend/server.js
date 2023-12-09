require("dotenv").config();

// Importing necessary modules

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

// Importing custom modules

const uploadToS3 = require("./s3-config");
const Dog = require("./models/dog");

require("dotenv").config();

// initilize the application with express
const app = express();
const port = 3000;

// Configure middleware
app.use(express.json());
app.use(cors());

// import multer into the app

const upload = multer({ dest: "uploads/" });

// import mongoose into the app

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`connected to MongoDB`))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Example: POST route to create a new dog profile
app.post("/dogs", upload.single("picture"), async (req, res) => {
  try {
    //  check if there is a file to upload
    if (req.file) {
      const uploadResult = await uploadToS3(req.file);
      console.log(req.file);

      //  Add the S3 url to  your form Data
      req.body.picture = uploadResult.Location;
    }

    // Create a new dog object including the URL of the picture
    const newDog = new Dog(req.body);
    const savedDog = await newDog.save();
    res.status(201).json({
      message: "New dog profile successfully saved",
      dog: savedDog,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Listen to the port
app.listen(port, () => {
  console.log(`this app is running on http://localhost:${port}`);
});

// Intergrate s3 upload

// //   // Route for file uploads
// //   app.post('/upload' , upload.single('picture') , async(req,res) =>{
// // const file=req.file;
// //  // You will then upload the file to a cloud storage service and get the URL
// //  const imageUrl = await uploadToCloudStorate(file);
// //  // Save imageUrl to your MongoDB document instead of the binary file
// // res.send({path:imageUrl})
// //   })
