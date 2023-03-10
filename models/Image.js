'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     /*  Image.belongsTo(models.Superhero,{
        foreignKey:'id'
       })*/
    }
  }
  Image.init({
    image:{
    field:'image',
    type: DataTypes.STRING,
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
    modelName: 'Image',
    tableName: 'images',
    underscored:true
  });
  return Image;
};