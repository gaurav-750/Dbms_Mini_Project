const express = require("express");
const Workout = require("../models/workout");
const router = express.Router();

//* Get all Workouts:
router.get("/", function (req, res) {
  return res.json({
    Message: "Welcome to Gym Tracker App",
  });
});

//* Get a single Workout:
router.get("/:id", (req, res) => {
  return res.json({
    Message: "Get a single workout",
  });
});

//* Post a single Workout:
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  console.log(title, reps, load);

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
});

//* Delete a single Workout:
router.delete("/:id", (req, res) => {
  return res.json({
    Message: "Delete a workout",
  });
});

//* Update a single Workout:
router.patch("/:id", (req, res) => {
  return res.json({
    Message: "Update a workout",
  });
});

module.exports = router;
