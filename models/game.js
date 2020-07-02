"use strict";
module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define(
    "game",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  game.associate = function (models) {
    game.hasMany(models.player);
  };
  return game;
};
