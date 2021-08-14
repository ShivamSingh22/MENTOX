const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const patientModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
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
  description: {
    type: String,
  },
  history: {
    type: String,
  },
  age: {
    type: String,
  },
});

module.exports = mongoose.model("patients", patientModel);
