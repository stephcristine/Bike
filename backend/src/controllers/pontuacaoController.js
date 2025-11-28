const Pontuacao = require('../models/Pontuacao');

module.exports = {

  async registrarPontuacao(req, res) {
    try {
      const nova = await Pontuacao.create({
        ...req.body,
        idUsuario: req.user.idUsuario
      });

      return res.status(201).json(nova);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao registrar pontuação" });
    }
  },

  async listar(req, res) {
    try {
      const lista = await Pontuacao.findAll({ where: { idUsuario: req.user.idUsuario } });
      return res.json(lista);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar pontuações" });
    }
  }
};
