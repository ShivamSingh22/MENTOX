const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const patientModel = new mongoose.Schema({
  description: {
    type: String,
  },
  history: {
    type: String,
  },
  age: {
    type: String,
  },
  type: {
    type: String,
  },
  isClarified: {
    type: Boolean,
    default: false,
  },
  _did: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "volunteers",
  },
  _uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("patients", patientModel);
