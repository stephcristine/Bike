const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Ranking = sequelize.define(
  "Ranking",
  {
    colocacao: { type: DataTypes.INTEGER, primaryKey: true },
    pontos: DataTypes.INTEGER,
    idGrupo: { type: DataTypes.INTEGER, primaryKey: true },
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
  },
  { tableName: "Ranking", timestamps: false }
);

module.exports = Ranking;
