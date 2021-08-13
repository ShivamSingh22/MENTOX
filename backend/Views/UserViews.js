const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.baseRoute = async (req, res) => {
  res.send("server up and running");
};

exports.RegisterUser = async (req, res) => {
  try {
    const { name, bio, email, username, password, phone, address } = req.body;

    if (!(email && bio && password && username && name && address && phone)) {
      res.status(400).send("All input are required");
    }

    const oldUser1 = await User.findOne({ email });
    const oldUser2 = await User.findOne({ username });

    if (oldUser1 || oldUser2) {
      return res.status(409).send("User already exist. Please Login");
    }

    enCryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: enCryptedUserPassword,
      username: username,
      phone: phone,
      address: address,
      bio: bio,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );

    user.token = token;

    user.save();

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.GetUserDetails = async (req, res) => {
  const data = await User.find();
  res.json(data);
};

exports.LoginUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!(email, password, username)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );
      user.token = token;
      user.save();
      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");
  } catch {
    return res.status(500).send("Something went wrong");
  }
};

exports.LogoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).send("Email field missing");
    }

    const user = await User.findOne({ email });
    if (user) {
      user.token = null;
      user.save();
      return res.status(200).json(user);
    }
    return res.status(400).send("No user");
  } catch {
    return res.status(500).send("Something went wrong");
  }
};
