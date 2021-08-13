const express = require("express");
const mongoose = require("mongoose");
const Users = mongoose.model("users");
const router = express.Router();
const userViews = require("../Views/UserViews.js");

router.get("/", userViews.baseRoute);
router.post("/user/register", userViews.RegisterUser);
router.get("/user", userViews.GetUserDetails);
router.post("/user/login", userViews.LoginUser);
router.post("/user/logout", userViews.LogoutUser);

module.exports = router;
