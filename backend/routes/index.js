const express = require("express");

const router = express.Router();
const workoutController = require("../controllers/workoutController");

//* Get all Workouts:
router.get("/", workoutController.getAllWorkouts);

//* Get a single Workout:
router.get("/:id", workoutController.getWorkout);

//* Post a single Workout:
router.post("/", workoutController.createWorkout);

//* Delete a single Workout:
router.delete("/:id", workoutController.deleteWorkout);

//* Update a single Workout:
router.patch("/:id", workoutController.updateWorkout);

module.exports = router;
