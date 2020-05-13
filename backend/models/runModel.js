import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const runSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
  seconds: {
    type: Number,
    required: true,
  },
});
