'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoteBook extends Model {
    static associate(models) {
      NoteBook.hasMany(models.Note, { foreignKey: 'noteBookId' });
    }
  }
  NoteBook.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NoteBook',
    },
  );
  return NoteBook;
};
