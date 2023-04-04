import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Jefferson',
        sobrenome: 'Caminhões',
        email: 'jeffinhoReiDelas@gmail.com',
        idade: 64,
        peso: 124,
        altura: 1.75,
      });
      res.json(novoAluno);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Home();
