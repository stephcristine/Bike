const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Problema = sequelize.define(
  "Problema",
  {
    id_problema: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: DataTypes.STRING,
    data_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    descricao: DataTypes.TEXT,
    status: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    latitude: DataTypes.DECIMAL(10, 7),
    longitude: DataTypes.DECIMAL(10, 7),
  },
  { tableName: "Problema", timestamps: false }
);

module.exports = Problema;
