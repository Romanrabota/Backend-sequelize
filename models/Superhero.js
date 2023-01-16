'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init({
     nickname: {
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
    notEmpty: true,
    notNull: true,
    min:1,
    max:200 
    }
  },
    realname: {
    field:'real_name',
    type:DataTypes.STRING,
    allowNull:false, validate:{
      notEmpty: true,
      notNull: true,
      min:1,
      max:200 
      }},
      origin_description:{
        field:'origin_description',
        type:DataTypes.STRING,
        allowNull:false, validate:{
          notEmpty: true,
          notNull: true 
          }
      },
      superpowers:{
        field:'superpowers',
        type:DataTypes.STRING,
        allowNull:false, validate:{
          notEmpty: true,
          notNull: true 
          }
      },
      cath_phrase:{
        field:'cath_phrase',
        type:DataTypes.STRING,
        allowNull:false, validate:{
          notEmpty: true,
          notNull: true,
          min:1,
          max:200  
          }
      },
      images:{
        field:'images',
        type:DataTypes.STRING,
        allowNull:false, validate:{
          notEmpty: true,
          notNull: true 
          }
      },
  }, {
    sequelize,
    modelName: 'Superhero',
    tableName: 'superhero',
    underscored:true
  });
  return Superhero;
};