import { Unit } from "@prisma/client";

import unitRepository from "../repositories/unitRepository.js";

export type CreateUnitData = Omit<Unit, "id">

async function createNewUnit(newUnit: CreateUnitData) {
  return await unitRepository.createNewUnit(newUnit)
}

async function getUnitsByCompanyId(companyId: string) {
  const units = await unitRepository.getUnitsByCompanyId(companyId)

  return units
}

const unitService = {
  createNewUnit,
  getUnitsByCompanyId
}

export default unitService