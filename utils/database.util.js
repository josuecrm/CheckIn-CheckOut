const { Sequelize, DataTypes } = require('sequelize');

// Connect to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  port: 5432,
  database: 'registrations',
  logging: false,
});

module.exports = { db, DataTypes };
