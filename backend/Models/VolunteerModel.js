const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const volunteerModel = new mongoose.Schema({
  experience: {
    type: String,
  },
  availability: {
    type: String,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  _uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  _pid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patients",
  },
});

module.exports = mongoose.model("volunteers", volunteerModel);
