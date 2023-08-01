const { DataTypes } = require('sequelize');
const sequelize = require('../../db_connect');

const SubCategorie = sequelize.define(
  'subCategories',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

module.exports = SubCategorie;
