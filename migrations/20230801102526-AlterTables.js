'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('catalogInfos', 'catalogID');
    await queryInterface.addColumn('catalogInfos', 'catalogId', {
      type: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
  }
};
