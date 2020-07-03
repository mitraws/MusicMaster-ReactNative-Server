"use strict";
module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define(
    "game",
    {
      name: DataTypes.DATE,
    },
    {}
  );
  game.associate = function (models) {
    game.hasMany(models.player);
  };
  return game;
};
