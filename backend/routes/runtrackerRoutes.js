import { addNewRun, getRun } from "../controllers/runtrackerControllers";

const routes = (app) => {
  app
    .route("/run")
    .get(getRun)

    .post(addNewRun);

  app
    .route("/run/:RunID")

    .get(getRunWithID)

    .put(UpdateRun)

    .delete(deleteRun);
};
