'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('images', 'catalogID');
    await queryInterface.addColumn('images', 'catalogId', {
      type: Sequelize.INTEGER
    });
  },

  async down(queryInterface, Sequelize) {}
};
