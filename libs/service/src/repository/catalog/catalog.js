const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const Catalog = sequelize.define(
  'catalogs',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    categoryId: { type: DataTypes.INTEGER },
    subCategoryId: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = Catalog;
