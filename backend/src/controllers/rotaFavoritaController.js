const RotaFavorita = require('../models/RotaFavorita');

module.exports = {

  async add(req, res) {
    try {
      const { idRota } = req.body;

      const novo = await RotaFavorita.create({
        idUsuario: req.user.idUsuario,
        idRota
      });

      return res.status(201).json(novo);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao favoritar rota" });
    }
  },

  async list(req, res) {
    try {
      const lista = await RotaFavorita.findAll({ where: { idUsuario: req.user.idUsuario } });
      return res.json(lista);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar rotas favoritas" });
    }
  }
};
