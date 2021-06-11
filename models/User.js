const database = require('../config/databaseConfig');
const { Sequelize, DataTypes } = require('sequelize');

const User = database.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
  },
});

module.exports = User;
