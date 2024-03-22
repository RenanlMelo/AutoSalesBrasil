const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = ["https://autosalesbrasil.vercel.app", "https://back-end-omega-five.vercel.app"]

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

app.use(cors('*'));

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use("/api", router);

module.exports = app