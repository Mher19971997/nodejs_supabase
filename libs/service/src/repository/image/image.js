const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const Image = sequelize.define(
  'images',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: { type: DataTypes.STRING, allowNull: false },
    catalogId: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = Image;
