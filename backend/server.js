//intializing express
const express = require("express");
const app = express();
//----

const cors = require("cors");
app.use(cors());

// dotenv package allow us to hide our secret keys and use them inside our doucment by variable name
const dotenv = require("dotenv");
dotenv.config();
//----

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware

app.use(express.json()); //this middleware will allow us to send json data
//----

// importing all our routes
const workoutRoute = require("./routes/workout");
app.use("/api/workout", workoutRoute); // using our route on this api call using middleware
//----

//staring app
//used dotenv here to hide our port number
app.listen(process.env.PORT, () => {
  console.log("Workout Buddy");
});
//----
