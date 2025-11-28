const Problema = require('../models/Problema');
const Usuario = require('../models/Usuario');

module.exports = {

  async create(req, res) {
    try {
      const novo = await Problema.create({
        ...req.body,
        idUsuario: req.user.idUsuario
      });

      return res.status(201).json(novo);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao registrar problema" });
    }
  },

  async list(req, res) {
    try {
      const problemas = await Problema.findAll({
        include: [{ model: Usuario, attributes: ["nome", "email"] }]
      });
      return res.json(problemas);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao listar problemas" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      await Problema.update(req.body, { where: { id_problema: id } });
      return res.json({ message: "Atualizado com sucesso" });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao atualizar problema" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await Problema.destroy({ where: { id_problema: id } });
      return res.json({ message: "Removido com sucesso" });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao remover problema" });
    }
  }

};
