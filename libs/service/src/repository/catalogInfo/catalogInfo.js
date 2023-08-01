

const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const CatalogInfo = sequelize.define(
  'catalogInfos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    catalogId: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = CatalogInfo;
