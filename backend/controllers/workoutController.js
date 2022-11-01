const Workout = require("../models/workout");
const mongoose = require("mongoose");

//* get all workouts:
module.exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    if (!workouts) {
      return res.json({
        Message: "No Workouts",
      });
    }

    return res.status(200).json({
      workouts,
    });
  } catch (error) {
    return res.json({ error });
  }
};

//* get a single workout:
module.exports.getWorkout = async (req, res) => {
  const id = req.params.id;
  //* Check if the id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      Error: "Not a valid id!",
    });
  }

  try {
    const workout = await Workout.find({ _id: id });
    if (!workout) {
      return res.status(404).json({
        Error: "No such Workout",
      });
    }

    return res.status(200).json({
      workout,
    });
  } catch (error) {
    return res.json({ error });
  }
};

//* create a new workout:
module.exports.createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    console.log("Added a new workout", workout);

    return res.status(200).json({
      Workout: workout,
    });
  } catch (error) {
    console.log("Error in adding Workout", error);
    return res.status(400).json({
      error: error.message,
    });
  }
};

//* update a workout:
module.exports.updateWorkout = async (req, res) => {
  const id = req.params.id;
  console.log("req.body in Update", req.body);

  //* Check if the id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      Error: "Not a valid id!",
    });
  }

  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!workout) {
      return res.status(404).json({
        Error: "No such Workout",
      });
    }

    return res.status(200).json({
      workout,
    });
  } catch (error) {
    console.log("Error in updating workout", error);

    return res.status(400).json({
      error: error.message,
    });
  }
};

//* delete a workout:
module.exports.deleteWorkout = async (req, res) => {
  const id = req.params.id;

  //* Check if the id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      Error: "Not a valid id!",
    });
  }

  try {
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.status(404).json({
        error: "No such Workout!",
      });
    }

    return res.status(200).json({
      workout,
      message: "Workout Deleted",
    });
  } catch (error) {
    console.log("Error in deleting workout", error);

    return res.status(400).json({
      error: error.message,
    });
  }
};
