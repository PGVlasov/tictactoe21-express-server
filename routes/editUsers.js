const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

router.post("/", async (req, res) => {
  const id = req.body.userId;
  await User.findByIdAndUpdate(id, req.body);
});

module.exports = router;
