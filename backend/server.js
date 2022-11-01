const express = require("express");

const app = express();

app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log("Error", err);
  }

  console.log(`Server is running on ${process.env.PORT}`);
});
