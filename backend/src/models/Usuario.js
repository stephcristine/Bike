const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define(
  "Usuario",
  {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data_nascimento: DataTypes.DATEONLY,
    telefone: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    senha: { type: DataTypes.STRING, allowNull: false },
    pontos: { type: DataTypes.INTEGER, defaultValue: 0 },
    idEndereco: DataTypes.INTEGER,
  },
  { tableName: "Usuario", timestamps: false }
);

module.exports = Usuario;
