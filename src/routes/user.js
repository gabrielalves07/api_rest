import { Router } from 'express';
import User from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir
// router.get('/', User.index);
// router.get('/:id', User.show);

router.post('/', User.create);
router.put('/', loginRequired, User.update);
router.delete('/', loginRequired, User.delete);

export default router;

/*
index -> Lista todos os usuarios (GET)
store/create -> Cria um novo usuario (POST)
delete -> Apaga um usuario (DELETE)
show -> Mostra um usuario (GET)
update -> Atualiza um usuario (PATCH OU PUT)
*/
