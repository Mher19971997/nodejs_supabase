const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const Rate = sequelize.define(
  'rates',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    from_currency_code: { type: DataTypes.INTEGER },
    to_currency_code: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = Rate;
