const database = require('../config/databaseConfig');

const connectDB = async () => {
  try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
    await database.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDB;
