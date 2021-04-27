const database = require('../config/databaseConfig');
const { Sequelize, DataTypes } = require('sequelize');
const User = require('./User');

const Customer = database.define('customer', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
  },
  lastName: {
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
  document: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
    unique: true,
  },
  address: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
  },
  createdBy: {
    type: DataTypes.UUID,
  },
});

module.exports = Customer;
