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
      name: true,

      assets: {
        select: {
          id: true,
          name: true,
          description: true,
          owner: true,
          healthLevel: true,
          status: true,
          unitId: true,
          model: true,
          unit: {
            select: {
              name: true
            }
          }
        }
      }
    }
  })

  return units
}

async function deleteUnitById(unitId: string) {
  return await prisma.unit.delete({
    where: {
      id: unitId
    }
  })
}

const unitRepository = {
  createNewUnit,
  getUnitsByCompanyId,
  deleteUnitById
}

export default unitRepository