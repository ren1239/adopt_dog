// Import express into the app
const express = require(express);
// initilize the application with express
const app = express();
// Declare the port
const port = 3000;

// Configure middleware
app.use(express.json());

// Listen to the port
app.listen(port, () => {
  console.log(`this app is running on https://localhost${port}`);
});

// import mongoose into the app
const mongoose = require(mongoose);

mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTypology: true,
  })
  .then(() => console.log(`connected to MongoDB`))
  .catch((err) => console.error("Could not connect to MongoDB", err));
