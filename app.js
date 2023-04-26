import dotenv from 'dotenv';

dotenv.config();

import './src/database/index';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { resolve } from 'path';
import home from './src/routes/home';
import user from './src/routes/user';
import token from './src/routes/token';
import aluno from './src/routes/aluno';
import foto from './src/routes/foto';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens', token);
    this.app.use('/alunos', aluno);
    this.app.use('/foto', foto);
  }
}

export default new App().app;
