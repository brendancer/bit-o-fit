const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  cardioName: {
    type: String,
    trim: true,
    required: "exercise name is required",
  },
  distance: {
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

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
