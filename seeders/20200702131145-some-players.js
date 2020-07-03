"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "players",
      [
        {
          name: "player1",
          score: 0,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player2",
          score: 2,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "player3",
          score: 10,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("players", null, {});
  },
};
