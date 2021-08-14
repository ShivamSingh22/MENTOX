const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const patientViews = require("../Views/PatientViews.js");

router.post("/create-patient", patientViews.CreatePatient);

module.exports = router;
