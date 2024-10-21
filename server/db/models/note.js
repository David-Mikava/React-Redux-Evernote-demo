'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate(models) {}
  }
  Note.init(
    {
      noteBookId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Note',
    },
  );
  return Note;
};
