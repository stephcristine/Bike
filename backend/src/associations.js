const Usuario = require("./models/Usuario");
const Endereco = require("./models/Endereco");
const Problema = require("./models/Problema");
const Pontuacao = require("./models/Pontuacao");
const Amizade = require("./models/Amizade");
const Grupo = require("./models/Grupo");
const GrupoMembro = require("./models/GrupoMembro");
const Ranking = require("./models/Ranking");
const CategoriaParceiro = require("./models/CategoriaParceiro");
const Parceiro = require("./models/Parceiro");
const ParceiroFavorito = require("./models/ParceiroFavorito");
const Rota = require("./models/Rota");
const RotaFavorita = require("./models/RotaFavorita");
const HistoricoRota = require("./models/HistoricoRota");

module.exports = () => {

  // Usuário → Endereco
  Usuario.belongsTo(Endereco, { foreignKey: "idEndereco" });

  // Problemas
  Usuario.hasMany(Problema, { foreignKey: "idUsuario" });
  Problema.belongsTo(Usuario, { foreignKey: "idUsuario" });

  // Pontuação
  Usuario.hasMany(Pontuacao, { foreignKey: "idUsuario" });
  Pontuacao.belongsTo(Usuario, { foreignKey: "idUsuario" });

  // Amizade (auto relacionamento)
  Usuario.belongsToMany(Usuario, {
    through: Amizade,
    as: "amigos",
    foreignKey: "idUsuario",
    otherKey: "id_amigo"
  });

  // Grupo → criador
  Grupo.belongsTo(Usuario, { foreignKey: "id_criador" });

  // GrupoMembro
  Usuario.belongsToMany(Grupo, {
    through: GrupoMembro,
    foreignKey: "idUsuario"
  });
  Grupo.belongsToMany(Usuario, {
    through: GrupoMembro,
    foreignKey: "idGrupo"
  });

  // Ranking
  Ranking.belongsTo(Usuario, { foreignKey: "idUsuario" });
  Ranking.belongsTo(Grupo, { foreignKey: "idGrupo" });

  // Parceiro → Endereco → Categoria
  Parceiro.belongsTo(Endereco, { foreignKey: "idEndereco" });
  Parceiro.belongsTo(CategoriaParceiro, { foreignKey: "idCategoriaParceiro" });

  // ParceiroFavorito
  Usuario.belongsToMany(Parceiro, {
    through: ParceiroFavorito,
    foreignKey: "idUsuario"
  });
  Parceiro.belongsToMany(Usuario, {
    through: ParceiroFavorito,
    foreignKey: "idParceiro"
  });

  // RotaFavorita
  Usuario.belongsToMany(Rota, {
    through: RotaFavorita,
    foreignKey: "idUsuario"
  });
  Rota.belongsToMany(Usuario, {
    through: RotaFavorita,
    foreignKey: "idRota"
  });

  // HistoricoRota
  Usuario.hasMany(HistoricoRota, { foreignKey: "idUsuario" });
  HistoricoRota.belongsTo(Usuario, { foreignKey: "idUsuario" });

  Rota.hasMany(HistoricoRota, { foreignKey: "idRota" });
  HistoricoRota.belongsTo(Rota, { foreignKey: "idRota" });
};
