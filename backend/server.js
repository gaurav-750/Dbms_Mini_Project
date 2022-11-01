const express = require("express");

const app = express();
require("dotenv").config();

// mongoose connection
require("./configs/mongoose");

app.use(express.urlencoded({ extended: true }));

// looks for body in json
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api", require("./routes/index.js"));

app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log("Error", err);
  }

  console.log(`Server is running on ${process.env.PORT}`);
});
