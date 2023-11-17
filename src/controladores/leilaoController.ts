// leilaoController.ts
import { leilaoService } from '../servicos/leilaoService';

import { Request, Response } from 'express';

export const getLeilao = async (req: Request, res: Response) => {
  const leiloes = await leilaoService.getAll();
  res.json(leiloes);
};