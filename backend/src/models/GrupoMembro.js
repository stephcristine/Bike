const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const GrupoMembro = sequelize.define(
  "GrupoMembro",
  {
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
    idGrupo: { type: DataTypes.INTEGER, primaryKey: true },
    data_entrada: DataTypes.DATEONLY,
  },
  { tableName: "GrupoMembro", timestamps: false }
);

module.exports = GrupoMembro;
