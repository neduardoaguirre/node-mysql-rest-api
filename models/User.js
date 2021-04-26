const database = require('../config/databaseConfig');
const { Sequelize } = require('sequelize');

const User = database.define('users', {
  id: {
    type: Sequelize.STRING,
    defaultValue: Date.now(),
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
    trim: true,
  },
  email: {
    type: Sequelize.STRING,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    required: true,
    trim: true,
  },
});

module.exports = User;
