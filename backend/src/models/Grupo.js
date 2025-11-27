const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Grupo = sequelize.define(
  "Grupo",
  {
    id_grupo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_criador: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    data_criacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "Grupo", timestamps: false }
);

module.exports = Grupo;
