import { Request, Response } from "express";
import unitService, { CreateUnitData } from "../services/unitService.js";

async function createNewUnit(req: Request, res: Response) {
  const newUnit: CreateUnitData = req.body

  await unitService.createNewUnit(newUnit)

  return res.sendStatus(201)
}

async function getUnitsByCompanyId(req: Request, res: Response) {
  const companyId: string = req.params.companyId

  const units = await unitService.getUnitsByCompanyId(companyId)

  return res.status(200).send(units)
}

export { createNewUnit, getUnitsByCompanyId }