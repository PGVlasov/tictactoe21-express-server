const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const filemiddeware = require("../middleware/file");
var app = express();

mongoose.set("useFindAndModify", false);
app.use(filemiddeware.single("image"));

router.get("/", async (req, res, next) => {
  const user = await User.find();

  // res.send(user);
});

router.post("/", async (req, res) => {
  console.log(req.file);
  //console.log(req.body);
  //   try {
  //     const user = await User.findById("610694be1251cd2a34cea17e");

  //     if (req.file) {
  //       user.avatarUrl = "";
  //     }

  //     Object.assign(user, toChahge);
  //     await user.save();
  //   } catch (e) {
  //     console.log(e);
  //   }
});

module.exports = router;
