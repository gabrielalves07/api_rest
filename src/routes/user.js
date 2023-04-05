import { Router } from 'express';
import User from '../controllers/User';

const router = new Router();

router.post('/', User.create);
router.get('/', User.index);
router.get('/:id', User.show);
router.put('/:id', User.update);

export default router;

/*
index -> Lista todos os usuarios (GET)
store/create -> Cria um novo usuario (POST)
delete -> Apaga um usuario (DELETE)
show -> Mostra um usuario (GET)
update -> Atualiza um usuario (PATCH OU PUT)
*/
