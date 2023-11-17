// lanceController.ts
import { lanceService } from '../servicos/lanceService';
import { Request, Response } from 'express';

export const getLance = async (req: Request, res: Response) => {
  const lances = await lanceService.getAll();
  res.json(lances);
};