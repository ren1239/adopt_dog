//  Import Cors into the app
const cors = require("cors");

// Import express into the app
const express = require("express");
// initilize the application with express
const app = express();
// Declare the port
const port = 3000;

// Configure middleware
app.use(express.json());
app.use(cors());

// Setup Environmental variables
require("dotenv").config();

// import mongoose into the app
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`connected to MongoDB`))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Import and use the Dog Model in your application
const Dog = require("./models/dog");

// Example: POST route to create a new dog profile
app.post("/dogs", async (req, res) => {
  try {
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

// import multer into the app

//   const multer = require('multer');
//   const upload = multer({dest: 'uploads/'})

// //   // Route for file uploads
// //   app.post('/upload' , upload.single('picture') , async(req,res) =>{
// // const file=req.file;
// //  // You will then upload the file to a cloud storage service and get the URL
// //  const imageUrl = await uploadToCloudStorate(file);
// //  // Save imageUrl to your MongoDB document instead of the binary file
// // res.send({path:imageUrl})
// //   })
