const Parceiro = require('../models/Parceiro');
const Endereco = require('../models/Endereco');

module.exports = {

  async list(req, res) {
    try {
      const parceiros = await Parceiro.findAll({
        include: [{ model: Endereco }]
      });

      return res.json(parceiros);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar parceiros" });
    }
  }
};
