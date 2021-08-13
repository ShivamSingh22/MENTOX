const express = require("express");
const app = express();
const routes = require("./Routes/Router.js");

app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);

module.exports = app;
