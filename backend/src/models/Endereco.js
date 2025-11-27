const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Endereco = sequelize.define(
  "Endereco",
  {
    id_endereco: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cep: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(10, 7),
    longitude: DataTypes.DECIMAL(10, 7),
  },
  { tableName: "Endereco", timestamps: false }
);

module.exports = Endereco;
