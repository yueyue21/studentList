const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes");

mongoose
  .connect(config.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database:" + err);
    }
  );
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  if (req.method == "OPTIONS") {
    res.send(200);
    /let options return/;
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server running on 3001");
});
