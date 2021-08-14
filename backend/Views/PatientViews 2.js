const mongoose = require("mongoose");
const User = mongoose.model("users");
const Patient = mongoose.model("patients");

exports.CreatePatient = async (req, res) => {
  try {
    const { description, uid, did, history, age, type } = req.body;
    if (!(description, uid, did, type)) {
      res.status(400).send("Provide every field");
    }
    const patient = await Patient.create({
      description: description,
      _uid: uid,
      _did: did,
      isAccepted: false,
      history: history,
      type: type,
      age: age,
    });
    if (patient) {
      return res.status(200).json(patient);
    }
    return res.status(400).send("Try again");
  } catch {
    res.status(400).send("Something went wrong");
  }
};
