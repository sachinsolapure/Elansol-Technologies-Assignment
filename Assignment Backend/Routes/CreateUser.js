const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 2 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(
      req.body.name,
      req.body.password,
      req.body.email,
      req.body.dob
    );
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging With Correct Credentials" });
      }

      if (req.body.password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "Try logging With Correct Credentials" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.get("/fetchAllUsers", async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
