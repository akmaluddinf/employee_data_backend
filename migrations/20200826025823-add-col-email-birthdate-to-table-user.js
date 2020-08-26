'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('user', 'email', { type: Sequelize.DataTypes.STRING, allowNull: true })
    await queryInterface.addColumn('user', 'birth_date', { type: Sequelize.DataTypes.DATEONLY, allowNull: true })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('user', 'email', {})
    await queryInterface.removeColumn('user', 'birth_date', {})
  }
};
