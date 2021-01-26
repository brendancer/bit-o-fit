const router = require("express").Router();
const Workout = require("../models/Workout.js");
const { db } = require("../models/Workout.js");

//get access to workouts in date order
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbData) => {
      res.json(dbData);
      console.log(dbData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//add exercises to workout
router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Workout.findByIdAndUpdate(
    id,
    {
      $push: { exercises: body },
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//create new workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Aggregate weight and duration
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalWeight: { $sum: "$exercises.weight" },
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(7)
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
