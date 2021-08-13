const mongoose = require("mongoose");
const Patient = mongoose.model("patients");
const Volunteer = mongoose.model("volunteers");

exports.CreateVolunteer = async (req, res) => {
  try {
    const { experience, availability, uid } = req.body;
    if (!(experience, uid, availability)) {
      res.status(400).send("Provide every field");
    }

    const volunteer = await Volunteer.create({
      experience: experience,
      availability: availability,
      _uid: uid,
    });

    if (volunteer) {
      return res.status(400).json(volunteer);
    }
    return res.status(200).send("Volunteer not created");
  } catch {
    return res.status(500).send("Something went wrong");
  }
};

exports.getVolunteers = async (req, res) => {
  const data = await Volunteer.find();
  res.json(data);
};

exports.getPatientList = async (req, res) => {
  try {
    const { did } = req.body;
    const data = await Patient.find({ _did: did });
    if (data) {
      return res.json(data);
    }
    return res.status(404).send("No patients yet");
  } catch {
    return res.status(500).send("Something went wrong");
  }
};
