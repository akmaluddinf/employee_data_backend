'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
       name: 'sandi',
       password: bcrypt.hashSync('sandi-pasword', 10)
    },
    {
      name: 'akmal',
      password: bcrypt.hashSync('akmal-pasword', 10)
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};
