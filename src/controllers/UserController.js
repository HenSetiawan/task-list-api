const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const saltRounds = 10;

exports.addNewUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    const result = await user.save();
    res.json({ result });
  } catch (error) {
    res.json({ error: error });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const privateKey = process.env.PRIVATE_KEY;
  try {
    const user = await User.findOne({ username: username });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      jwt.sign({ user_id: user.id }, privateKey, (err, token) => {
        res.json({
          user,
          token: token,
        });
      });
    } else {
      res.json({ message: "username or password is incorrect" });
    }
  } catch (error) {
    res.json({ message: "username or password is incorrect" });
  }
};
