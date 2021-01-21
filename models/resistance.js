const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  resistanceName: {
    type: String,
    trim: true,
    required: "Exercise name is required",
  },
  weight: {
    type: Number,
    trim: true,
    required: true,
  },
  sets: {
    type: Number,
    trim: true,
    required: true,
  },
  reps: {
    type: Number,
    trim: true,
    required: false,
  },
  duration: {
    type: Number,
    trim: true,
    required: false,
  },
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
