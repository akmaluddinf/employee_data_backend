'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
       name: 'sandi',
       password: bcrypt.hashSync('sandi-password', 10),
       email: 'sandi@gmail.com',
       birth_date: '2000-01-01'
    },
    {
      name: 'akmal',
      password: bcrypt.hashSync('akmal-password', 10),
      email: 'akmal@gmail.com',
      birth_date: '1995-04-14'
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};
