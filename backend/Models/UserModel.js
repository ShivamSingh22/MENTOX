const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userModel = new mongoose.Schema({
  username: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("users", userModel);
