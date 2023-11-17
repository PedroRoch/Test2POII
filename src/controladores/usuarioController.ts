// usuarioController.ts
import { usuarioService } from '../servicos/usuarioService';

import { Request, Response } from 'express';

export const getUsuario = async (req: Request, res: Response) => {
  const usuarios = await usuarioService.getAll();
  res.json(usuarios);
};