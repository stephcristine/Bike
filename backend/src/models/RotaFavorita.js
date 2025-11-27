const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RotaFavorita = sequelize.define(
  "RotaFavorita",
  {
    idRota: { type: DataTypes.INTEGER, primaryKey: true },
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
    data: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "RotaFavorita", timestamps: false }
);

module.exports = RotaFavorita;
