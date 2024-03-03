const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

mongoose
  .connect('mongodb+srv://Faro30102012:Faro30102012@autosalesbrasildb.pwxusym.mongodb.net/?retryWrites=true&w=majority&appName=AutoSalesBrasilDB')
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
