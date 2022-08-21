'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user_addresses', 'user_id', {
      type: Sequelize.UUID,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_addresses', 'user_id')
  }
};
