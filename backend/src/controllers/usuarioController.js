const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    
  // Registro
  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const exists = await Usuario.findOne({ where: { email } });
      if (exists) return res.status(409).json({ message: "E-mail já cadastrado" });

      const hashed = await bcrypt.hash(senha, 10);

      const novoUsuario = await Usuario.create({ nome, email, senha: hashed });

      return res.status(201).json(novoUsuario);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao registrar usuário" });
    }
  },

  // Login
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) return res.status(401).json({ error: "Credenciais inválidas" });

      const ok = await bcrypt.compare(senha, usuario.senha);
      if (!ok) return res.status(401).json({ error: "Credenciais inválidas" });

      const token = jwt.sign(
        { idUsuario: usuario.id_usuario },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.json({ token });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao realizar login" });
    }
  },

  // Perfil
  async me(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.user.idUsuario, {
        include: [{ model: Endereco }]
      });

      return res.json(usuario);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao carregar perfil" });
    }
  },

  // Atualização
  async update(req, res) {
    try {
      const id = req.user.idUsuario;
      await Usuario.update(req.body, { where: { id_usuario: id } });
      return res.json({ message: "Atualizado com sucesso" });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  }
};
