class Home {
  async index(req, res) {
    try {
      res.json('index');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Home();
