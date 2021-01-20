const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
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
  duration,
});
