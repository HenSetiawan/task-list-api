const User = require("../models/UserModel");

exports.addNewUser = async (req, res) => {
  const { username, email, password, role} = req.body;
  try {
    const task = new Task({
      title,
      description,
      deadline,
      subject,
      url,
    });
    const result = await task.save();
    res.json({ result });
  } catch (error) {
    res.json({ error: error });
  }
};