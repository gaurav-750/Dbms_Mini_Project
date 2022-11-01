const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connection successfull to MongoDB Atlas!");
  })
  .catch((err) => console.log("Unable to connect to MongoDB, Error: ", err));

const db = mongoose.connection;
module.exports = db;
