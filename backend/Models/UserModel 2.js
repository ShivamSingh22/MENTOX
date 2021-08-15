const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: null,
  },
  bio: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("users", userModel);
