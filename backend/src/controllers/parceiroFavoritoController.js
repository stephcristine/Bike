const ParceiroFavorito = require('../models/ParceiroFavorito');

module.exports = {

  async add(req, res) {
    try {
      const { idParceiro } = req.body;

      const novo = await ParceiroFavorito.create({
        idUsuario: req.user.idUsuario,
        idParceiro
      });

      return res.status(201).json(novo);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao favoritar parceiro" });
    }
  },

  async list(req, res) {
    try {
      const lista = await ParceiroFavorito.findAll({ where: { idUsuario: req.user.idUsuario } });
      return res.json(lista);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar parceiros favoritos" });
    }
  }
};
