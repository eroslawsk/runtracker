import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyparser from "body-parser";
import routes from "./routes/runtrackerRoutes";
import cors from "cors";

const app = express();
const PORT = 5000;

//Mongo connection
mongoose.promise = global.Promise;
mongoose.connect("mongodb://localhost/runtrackerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//body parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//cors setup
app.use(cors());

routes(app);

app.get("/", (request, response) =>
  response.send(`The application is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`The express server is running on port ${PORT}`)
);
