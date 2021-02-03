const express = require("express");
const auth = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const User = require("../model/User");

auth.post("/register", async (req, res) => {
  console.log(req.body.email);
  // Validate data
  const { error } = registerValidation(req.body);
  if (error)
    return res.status(400).json({
      user: null,
      redirect: "/new",
      step: 0,
      message: error.details[0].message,
    });

  //Check if the user exists
  try {
    const emailExists = await User.findOne({ email: req.body.email }, () => {
      console.log("Done");
    });
    if (emailExists)
      return res.status(400).json({
        user: null,
        redirect: "/new",
        step: 0,
        message: "Email already exists in the community!",
      });
  } catch (err) {
    return res
      .status(500)
      .json({ user: null, redirect: "/new", step: 0, message: err.message });
  }

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  console.log(hashedPassword);
  // Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();

    if (savedUser)
      res.status(200).json({
        user: savedUser._id,
        redirect: "/discussion",
        step: 1,
        message: "success",
      });
    else
      res.status(400).json({
        user: null,
        redirect: "/new",
        step: 0,
        message: "Bad request",
      });
  } catch (err) {
    res
      .status(500)
      .json({ user: null, redirect: "/new", step: 0, message: err.message });
  }
});

auth.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error)
    return res.status(400).json({
      user: null,
      redirect: "/new",
      step: 0,
      message: error.details[0].message,
    });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({
      user: null,
      redirect: "/new",
      step: 0,
      message: "Email / Password is incorrect!",
    });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({
      user: null,
      redirect: "/new",
      step: 0,
      message: "Email / Password is incorrect!",
    });

  // Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token);
  res.status(200).json({
    user: user._id,
    redirect: "/discussion",
    step: 1,
    message: "success",
  });
});

module.exports = auth;
