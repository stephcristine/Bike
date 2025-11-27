const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CategoriaParceiro = sequelize.define(
  "CategoriaParceiro",
  {
    id_categoriaParceiro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
  },
  { tableName: "CategoriaParceiro", timestamps: false }
);

module.exports = CategoriaParceiro;
