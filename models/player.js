"use strict";
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define(
    "player",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        max: 20,
      },
      score: {
        type: DataTypes.INTEGER,
      },
      gameId: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  player.associate = function (models) {
    player.belongsTo(models.game);
  };
  return player;
};
