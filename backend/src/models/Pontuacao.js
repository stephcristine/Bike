const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pontuacao = sequelize.define(
  "Pontuacao",
  {
    id_pontuacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    data: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    idUsuario: DataTypes.INTEGER,
  },
  { tableName: "Pontuacao", timestamps: false }
);

module.exports = Pontuacao;
