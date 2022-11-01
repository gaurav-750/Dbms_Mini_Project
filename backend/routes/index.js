const express = require("express");

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
router.post("/", (req, res) => {
  return res.json({
    Message: "Post a new workout",
  });
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
