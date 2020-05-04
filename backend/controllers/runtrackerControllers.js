import mongoose from "mongoose";
import { runSchema } from "../models/runModel";

const Run = mongoose.model("Run", runSchema);

export const addNewRun = (request, response) => {
  let newRun = new Run(req.body);

  newRun.save((err, Run) => {
    if (err) {
      response.send(err);
    }
    response.json(Run);
  });
};

export const getRun = (request, response) => {
  Run.find({}, (err, Run) => {
    if (err) {
      response.send(err);
    }
    response.json(Run);
  });
};

export const getRunWithID = (request, response) => {
  Run.findById(req.params.RunID, (err, Run) => {
    if (err) {
      response.send(err);
    }
    response.json(Run);
  });
};

export const UpdateRun = (request, response) => {
  Run.findOneAndUpdate(
    { _id: req.params.RunID },
    req.body,
    { new: true },
    (err, Run) => {
      if (err) {
        response.send(err);
      }
      response.json(Run);
    }
  );
};

export const deleteRun = (request, response) => {
  Run.remove({ _id: req.params.RunID }, (err, Run) => {
    if (err) {
      response.send(err);
    }
    response.json(Run);
  });
};
