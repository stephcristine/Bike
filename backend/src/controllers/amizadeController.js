const Amizade = require('../models/Amizade');

module.exports = {

  async adicionarAmigo(req, res) {
    try {
      const { id_amigo } = req.body;

      const nova = await Amizade.create({
        idUsuario: req.user.idUsuario,
        id_amigo,
        data_inicio: new Date()
      });

      return res.status(201).json(nova);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao adicionar amigo" });
    }
  },

  async listarAmigos(req, res) {
    try {
      const amigos = await Amizade.findAll({
        where: { idUsuario: req.user.idUsuario }
      });

      return res.json(amigos);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar amigos" });
    }
  }
};
