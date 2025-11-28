const Grupo = require('../models/Grupo');

module.exports = {

  async create(req, res) {
    try {

      const novo = await Grupo.create({
        nome: req.body.nome,
        id_criador: req.user.idUsuario
      });

      return res.status(201).json(novo);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao criar grupo" });
    }
  },

  async list(req, res) {
    try {
      const grupos = await Grupo.findAll();
      return res.json(grupos);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar grupos" });
    }
  }
};
