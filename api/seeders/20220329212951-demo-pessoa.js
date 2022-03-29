'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [{
      nome: 'Pessoa1',
      ativo: true,
      email: 'pessoa1@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Pessoa2',
      ativo: true,
      email: 'pessoa2@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Pessoa3',
      ativo: true,
      email: 'pessoa3@gmail.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Pessoa4',
      ativo: true,
      email: 'pessoa4@gmail.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
