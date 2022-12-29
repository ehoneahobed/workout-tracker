const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// get all workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getWorkout);

// create a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
