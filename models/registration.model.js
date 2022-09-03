const { db, DataTypes } = require('../utils/database.util');

// Create our first model (registrations)
const Registration = db.define(
  'registration',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    entranceTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    exitTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'working',
    },
  },
  { timestamps: false }
);

module.exports = { Registration };
