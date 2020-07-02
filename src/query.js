const Player = require("../models").player;

async function getPlayers() {
  const allPlayers = await Player.findAll();
  return allPlayers.map(player => player.get({ plain: true }));
}

getPlayers().then(players => console.log(players));
