const Rota = require('../models/Rota');

module.exports = {

  async create(req, res) {
    try {
      const nova = await Rota.create(req.body);
      return res.status(201).json(nova);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao criar rota" });
    }
  },

  async list(req, res) {
    try {
      const rotas = await Rota.findAll();
      return res.json(rotas);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar rotas" });
    }
  }
};
