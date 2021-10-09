const jwt = require("jsonwebtoken");
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;

exports.auth = (req, res, next) => {
  const token = req.headers["authorization"];
  jwt.verify(token, privateKey, (err, userId) => {
    if (err) {
      res.json({
        message: "something wrong with your token",
        error: err,
      });
    } else {
      req.userId = userId;
      next();
    }
  });
};


