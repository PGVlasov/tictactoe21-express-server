const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

// router.get("/", async (req, res) => {
//   res.get({
//     user: req.user.toObject(),
//   });
// });

router.get("/", async (req, res, next) => {
  //   res.get({
  //     us: req.user.toObject(),
  //   });

  const user = await User.find();
  //const user = await User.findById(req.user._id);
  console.log(user);
  res.send(user);
});

module.exports = router;
