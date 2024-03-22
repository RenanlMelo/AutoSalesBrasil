const mongoose = require("mongoose");
const app = require('./app.js')

const port = process.env.PORT || 9001;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // Exit the process if failed to connect to DB
  });