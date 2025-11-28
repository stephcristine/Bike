const CategoriaParceiro = require('../models/CategoriaParceiro');

module.exports = {

  async list(req, res) {
    try {
      const categorias = await CategoriaParceiro.findAll();
      return res.json(categorias);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar categorias" });
    }
  }
};
