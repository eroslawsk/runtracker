import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/runtrackerRoutes";

const app = express();
const PORT = 4000;

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

//routes(app);

app.get("/", (request, response) => {
  response.send(`The application is running on port ${PORT}`);
});

app.use(PORT, () => {
  console.log(`The express server is running on port ${PORT}`);
});
