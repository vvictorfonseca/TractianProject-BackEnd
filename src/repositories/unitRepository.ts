import prisma from "../database.js";
import { CreateUnitData } from "../services/unitService.js";

async function createNewUnit(newUnit: CreateUnitData) {
  await prisma.unit.create({ data: newUnit })
}

async function getUnitsByCompanyId(companyId: string) {
  const units = await prisma.unit.findMany({
    where: {
      companyId
    },
    select: {
      id: true,
      name: true
    }
  })

  return units
}

const unitRepository = {
  createNewUnit,
  getUnitsByCompanyId
}

export default unitRepository