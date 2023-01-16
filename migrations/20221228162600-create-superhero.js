'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superhero', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique:true,
        type: Sequelize.INTEGER
      },
      nickname: {
        allowNull:false,
        type: Sequelize.STRING
      },
      real_name: {
        field:'real_name',
        allowNull:false,
        type: Sequelize.STRING
      },
      origin_description:{
        field:'origin_description',
        type:Sequelize.STRING,
        allowNull:false,
      },
      cath_phrase:{
        field:'cath_phrase',
        type:Sequelize.STRING,
        allowNull:false,
      },
      superpowers:{
        field:'superpowers',
        type:Sequelize.STRING,
        allowNull:false,
      },
       images:{
        field:'images',
        type:Sequelize.STRING,
        allowNull:false,
      },
        createdAt: {
        field:'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field:'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superhero');
  }
};