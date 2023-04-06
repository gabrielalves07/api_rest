import User from '../models/User';

class UserController {
  // create
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const user = await User.findAll();
      res.json(user);
    } catch (e) {
      res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (e) {
      res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erros: ['O usuário não se encontra na base de dados'],
        });
      }

      const novosDados = await user.update(req.body);

      res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erros: ['O usuário não se encontra na base de dados'],
        });
      }

      await user.destroy();
      return res.json({
        msg: 'Usuário deletado com sucesso',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
