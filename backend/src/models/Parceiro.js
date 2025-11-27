const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Parceiro = sequelize.define(
  "Parceiro",
  {
    id_parceiro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cnpj: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    idEndereco: DataTypes.INTEGER,
    idCategoriaParceiro: DataTypes.INTEGER,
  },
  { tableName: "Parceiro", timestamps: false }
);

module.exports = Parceiro;
