const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Amizade = sequelize.define(
  "Amizade",
  {
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
    id_amigo: { type: DataTypes.INTEGER, primaryKey: true },
    data_inicio: DataTypes.DATEONLY,
  },
  { tableName: "Amizade", timestamps: false }
);

module.exports = Amizade;
