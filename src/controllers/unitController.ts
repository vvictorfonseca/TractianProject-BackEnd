import { Request, Response } from "express";
import unitRepository from "../repositories/unitRepository.js";
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

async function deleteUnitById(req: Request, res: Response) {
  const unitId: string = req.params.unitId

  await unitRepository.deleteUnitById(unitId)

  return res.sendStatus(200)
}

export { createNewUnit, getUnitsByCompanyId, deleteUnitById }