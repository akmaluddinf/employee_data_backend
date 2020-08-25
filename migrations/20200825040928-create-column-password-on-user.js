'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const options = {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    }
    await queryInterface.addColumn('user', 'password', options)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user', 'password', {})
  }
};
