const Endereco = require('../models/Endereco');

module.exports = {

  async create(req, res) {
    try {
      const novo = await Endereco.create(req.body);
      return res.status(201).json(novo);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao criar endereço" });
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params;
      const endereco = await Endereco.findByPk(id);
      return res.json(endereco);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao obter endereço" });
    }
  }
};
