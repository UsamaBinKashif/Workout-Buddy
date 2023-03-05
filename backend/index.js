//intializing express
const express = require("express");
const app = express();
//----

// dotenv package allow us to hide our secret keys and use them inside our doucment by variable name
const dotenv = require("dotenv");
dotenv.config();
//----

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
