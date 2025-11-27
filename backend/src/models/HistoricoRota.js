const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const HistoricoRota = sequelize.define(
  "HistoricoRota",
  {
    id_historicoRota: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idRota: DataTypes.INTEGER,
    duracao: DataTypes.INTEGER,
    distancia: DataTypes.FLOAT,
    calorias: DataTypes.FLOAT,
    carbono: DataTypes.FLOAT,
    data: DataTypes.DATE,
    pontosGanhos: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    velocidade: DataTypes.FLOAT,
    inicio: DataTypes.DATE,
    termino: DataTypes.DATE,
  },
  { tableName: "HistoricoRota", timestamps: false }
);

module.exports = HistoricoRota;
