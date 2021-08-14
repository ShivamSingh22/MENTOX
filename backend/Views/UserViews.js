const mongoose = require("mongoose");
const User = mongoose.model("users");

exports.CreateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username, password)) {
      res.status(400).send("Provide every field");
    }
    const user = await User.create({
      username: username,
      password: password,
    });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).send("Try again");
  } catch {
    res.status(400).send("Something went wrong");
  }
};
