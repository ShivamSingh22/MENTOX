const express = require("express");
const app = express();
const routes = require("./Routes/Router.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/", routes);

module.exports = app;
