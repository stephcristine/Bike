const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ParceiroFavorito = sequelize.define(
  "ParceiroFavorito",
  {
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
    idParceiro: { type: DataTypes.INTEGER, primaryKey: true },
    data: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "ParceiroFavorito", timestamps: false }
);

module.exports = ParceiroFavorito;
