const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const Currencie = sequelize.define(
  'currencies',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: { type: DataTypes.STRING, unique: true },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = Currencie;
