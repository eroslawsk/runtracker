import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const runSchema = new Schema({
  day: {
    type: Date,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  averageMile: {
    type: Number,
    required: true,
  },
});
