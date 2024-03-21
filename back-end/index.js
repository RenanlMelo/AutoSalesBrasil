const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = "https://autosalesbrasil.vercel.app, https://autosalesbrasil-server.vercel.app";

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // Exit the process if failed to connect to DB
  });

const port = process.env.PORT || 9001;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});