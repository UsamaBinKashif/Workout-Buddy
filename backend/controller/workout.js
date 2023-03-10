const Workout = require("../model/workout");
const mongoose = require("mongoose");
const handleGetAllDocs = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleGetSingleDoc = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json("No such workout");
  }

  const workout = await Workout.findById({ _id: id });

  if (!workout) {
    return res.status(400).json("No such workout");
  }
  res.status(200).json(workout);
};

const handleAddDoc = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleDeleteDoc = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json("No such workout");
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json("No such workout");
  }
  res.status(200).json("Deleted");
};

const handleUpdateDoc = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json("No such workout");
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );
  if (!workout) {
    return res.status(400).json("No such workout");
  }
  res.status(200).json(workout);
};

module.exports = {
  handleAddDoc,
  handleGetAllDocs,
  handleGetSingleDoc,
  handleDeleteDoc,
  handleUpdateDoc,
};
