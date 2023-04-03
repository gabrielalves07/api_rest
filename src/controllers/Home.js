import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Gabriel',
        sobrenome: 'Alves',
        email: 'gabrielalves@gmail.com',
        idade: 17,
        peso: 60,
        altura: 1.82,
      });
      res.json(novoAluno);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Home();
