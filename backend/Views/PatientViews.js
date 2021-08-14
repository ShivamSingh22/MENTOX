const mongoose = require("mongoose");
const Patient = mongoose.model("patients");

exports.CreatePatient = async (req, res) => {
  try {
    const { email, name, phone, address, description, history, age } = req.body;
    if (!(description, email, name, phone, address, age)) {
      res.status(400).send("Provide every field");
    }
    const patient = await Patient.create({
      description: description,
      history: history,
      age: age,
      email: email,
      name: name,
      phone: phone,
      address: address,
    });
    if (patient) {
      return res.status(200).json(patient);
    }
    return res.status(400).send("Try again");
  } catch {
    res.status(400).send("Something went wrong");
  }
};
