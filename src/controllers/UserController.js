const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
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
