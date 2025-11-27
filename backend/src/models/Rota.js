const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Rota = sequelize.define(
  "Rota",
  {
    id_rota: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    longitude_origem: DataTypes.DECIMAL(10, 7),
    latitude_origem: DataTypes.DECIMAL(10, 7),
    longitude_destino: DataTypes.DECIMAL(10, 7),
    latitude_destino: DataTypes.DECIMAL(10, 7),
    distancia: DataTypes.FLOAT,
    tempo_estimado: DataTypes.FLOAT,
  },
  { tableName: "Rota", timestamps: false }
);

module.exports = Rota;
