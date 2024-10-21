'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {}
  }
  Task.init(
    {
      userId: DataTypes.INTEGER,
      task: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
