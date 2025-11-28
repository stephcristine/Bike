const Ranking = require('../models/Ranking');

module.exports = {

  async listar(req, res) {
    try {
      const { idGrupo } = req.params;
      const ranking = await Ranking.findAll({ where: { idGrupo } });
      return res.json(ranking);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar ranking" });
    }
  }
};
