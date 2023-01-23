'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },     
      image: {
        field:'image',
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      createdAt: {
        field:'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        underscored:true
      },
      updatedAt: {
        field:'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        underscored:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('images');
  }
};