const router = require("express").Router();
const Workout = require("../models/Workout.js");
const { db } = require("../models/Workout.js");

//get access to workouts in date order
router.get("/api/workout", (req, res) => {
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
router.put("api/workout/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Workout.findByIdAndUpdate(
    { id },
    {
      $push: { exercises: body },
    }
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
router.post("/api/workout", (req, res) => {
  Workout.create({})
    .then((dbData) => {
      res.jason(dbData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Aggregate weight and duration
router.get("/api/workout", (req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .limit(7)
    .then((dbData) => {
      db.workout.aggregate([
        {
          $addFields: {
            totalWeight: { $sum: "$weight" },
            totalDuration: { $sum: "$duration" },
          },
        },
      ]);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
