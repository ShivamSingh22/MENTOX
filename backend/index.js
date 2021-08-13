const express = require("express");
const app = express();
const routes = require("./Routes/Router.js");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);

module.exports = app;
