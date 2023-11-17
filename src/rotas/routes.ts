// routes.ts
import express from 'express';
import { getUsuario } from './controladores/usuarioController.ts';
import { getLeilao } from './controladores/leilaoController.ts';
import { getLance } from './controladores/lanceController.ts';

const router = express.Router();

router.get('/usuarios', getUsuario);
router.get('/leiloes', getLeilao);
router.get('/lances', getLance);

export default router;

