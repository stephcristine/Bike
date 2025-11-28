const GrupoMembro = require('../models/GrupoMembro');

module.exports = {

  async entrar(req, res) {
    try {
      const { idGrupo } = req.body;

      const membro = await GrupoMembro.create({
        idUsuario: req.user.idUsuario,
        idGrupo,
        data_entrada: new Date()
      });

      return res.status(201).json(membro);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao entrar no grupo" });
    }
  },

  async membros(req, res) {
    try {
      const membros = await GrupoMembro.findAll({ where: { idGrupo: req.params.idGrupo } });
      return res.json(membros);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar membros" });
    }
  }
};
