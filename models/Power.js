'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Power.init({
    power:{
      field:'power',
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
      notEmpty: true,
      notNull: true,
      min:1,
      max:200 
      }
  },
  nickname:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
    notEmpty: true,
    notNull: true,
    min:1,
    max:200 
    }
}
},
  {
    sequelize,
    modelName: 'Power',
    tableName: 'powers',
    underscored:true

  });
  return Power;
};