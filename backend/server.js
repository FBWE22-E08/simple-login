import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";

import initialize from "./routes/passport-config.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
initialize(passport);
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
// is configuring the Express middleware to handle URL-encoded form data.
// in version 4.16.0 and then it is not necessary because by default it is false
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// data base
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("we are connected to the database.");
  })
  .catch((error) => {
    console.log("an error occurred while connecting ot the db", error);
  });

// routes
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`The webserver is running on port ${PORT}`));
