const { Router } = require("express");
const Game = require("../models").game;
const Player = require("../models").player;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const players = req.body.players;
    if (!players || players.length === 0) {
      return res.status(400).send("you must provide an array of player names");
    }
    const invalid = players.some((name) => !name || name === "");
    if (invalid) {
      return res.status(400).send("some players dont have names");
    }

    const newGame = await Game.create({ name: new Date() });

    const newPlayers = players.map((name) => ({
      name,
      gameId: newGame.id,
      score: 0,
    }));
    await Player.bulkCreate(newPlayers);

    return res.status(201).send({ message: "game and players created" });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res) => {
  const game = await Game.findByPk(1);
  res.send(game);
});

module.exports = router;
