import prisma from "../database.js";
import { CreateAssetData } from "../services/assetService.js";

async function createNewAsset(newAsset: CreateAssetData) {
  await prisma.asset.create({ data: newAsset })
}

async function getAssetsByUnitId(unitId: string) {
  const assets = await prisma.asset.findMany({
    where: {
      unitId
    },
    select: {
      id: true,
      name: true,
      image: true,
      model: true,
      owner: true,
      description: true,
      status: true,
      healthLevel: true,
      unitId: true
    }
  })

  return assets
}

async function deleteAssetById(assetId: string) {
  return await prisma.asset.delete({
    where: {
      id: assetId
    }
  })
}

const assetRepository = {
  createNewAsset,
  getAssetsByUnitId,
  deleteAssetById
}

export default assetRepository