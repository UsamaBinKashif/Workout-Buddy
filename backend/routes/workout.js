const router = require("express").Router();

//All Documents
router.get("/", (req, res) => {
  res.status(200).json("All Workouts");
});

//Single Document
router.get("/:id", (req, res) => {
  res.status(200).json("Single Workout");
});

//Add Document
router.post("/:id", (req, res) => {
  res.status(200).json("Added Workout");
});

//Delete Document
router.delete("/:id", (req, res) => {
  res.status(200).json("Deleted Workout");
});

//Update Document
router.patch("/:id", (req, res) => {
  res.status(200).json("Updated Workout");
});

module.exports = router;
