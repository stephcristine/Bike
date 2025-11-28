const HistoricoRota = require('../models/HistoricoRota');

module.exports = {

  async registrar(req, res) {
    try {
      const novo = await HistoricoRota.create({
        ...req.body,
        idUsuario: req.user.idUsuario
      });

      return res.status(201).json(novo);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao registrar histórico" });
    }
  },

  async list(req, res) {
    try {
      const lista = await HistoricoRota.findAll({
        where: { idUsuario: req.user.idUsuario }
      });

      return res.json(lista);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar histórico" });
    }
  }
};
