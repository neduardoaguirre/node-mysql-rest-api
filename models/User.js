const database = require('../config/databaseConfig');
const { Sequelize } = require('sequelize');

const User = database.define('users', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
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
