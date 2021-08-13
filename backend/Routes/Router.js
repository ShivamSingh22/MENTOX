const express = require("express");
const mongoose = require("mongoose");
const Users = mongoose.model("users");
const router = express.Router();
const userViews = require("../Views/UserViews.js");
const volunteerViews = require("../Views/VolunteerViews.js");
const patientViews = require("../Views/PatientViews.js");

router.get("/", userViews.baseRoute);
router.post("/user/register", userViews.RegisterUser);
router.get("/user", userViews.GetUserDetails);
router.post("/user/login", userViews.LoginUser);
router.get("/user/logout/:id", userViews.LogoutUser);
router.post("/create-volunteer", volunteerViews.CreateVolunteer);
router.get("/volunteer-list", volunteerViews.getVolunteers);
router.post("/patients-assigned", volunteerViews.getPatientList);
router.post("/create-patient", patientViews.CreatePatient);

module.exports = router;
