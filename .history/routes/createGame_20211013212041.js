const { Router } = require("express");
const createGame = require("../models/createGame");
const router = Router();

router.post("/", async (req, res) => {
  console.log("somthing");
  console.log("SAVE TO BD", req.body);
  const game = new createGame({
    creator: req.body.creator,
    url: req.body.title,
    cliced: req.body.cliced,
  });
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.post("/delete", async (req, res) => {
  console.log("somthing");
  console.log(req.body);
  const game = await createGame.findOneAndDelete(
    "http://localhost:3000/game/:17c6aae550f"
  );
  console.log("DELETE", game);
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.post("/cliced", async (req, res) => {
  console.log("somthing");
  iD = req.body.id;
  //   console.log("GAME ID:", req.body.id);
  console.log("CLICED FROM CLAENT", req.body.cliced);
  const game = await createGame.findByIdAndUpdate(iD, req.body.cliced);
  console.log("Changed Game", game);
  //   );
  // const game = await createGame.findOne({"http://localhost:3000/game/:17c6adc67a1"});
  // console.log("Changed Game", game);
  try {
    await game.save();
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req, res, next) => {
  const games = await createGame.find();
  console.log(games);
  res.send(games);
});

module.exports = router;