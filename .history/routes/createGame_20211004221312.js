const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  console.log("somthing");
  console.log(req.body);
  const user = new createGame({
    id: req.body.id,
    creator: req.body.creator,
    name: req.body.title,
  });
});

module.exports = router;
