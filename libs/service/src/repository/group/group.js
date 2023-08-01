const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const Group = sequelize.define(
  'groups',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, unique: true },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = Group;
