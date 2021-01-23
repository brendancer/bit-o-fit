const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "cardio or resistance?",
      },

      sets: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },

      weight: {
        type: Number,
        trim: true,
      },

      distance: {
        type: Number,
        trim: true,
      },

      duration: {
        type: Number,
        trim: true,
        required: "Total time spent exercising in minutes",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
