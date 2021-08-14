const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const patientViews = require("../Views/PatientViews.js");
const userViews = require("../Views/UserViews.js");

router.post("/create-patient", patientViews.CreatePatient);
router.post("/create-user", userViews.CreateUser);

module.exports = router;
