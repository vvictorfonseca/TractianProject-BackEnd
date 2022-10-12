import prisma from "../database.js";
import { CreateAssetData, UpdateAssetData, UpdateStatusData } from "../services/assetService.js";

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

async function updateHealthLevel(updateAsset: UpdateAssetData) {
  const updateLevel = await prisma.asset.update({
    where: {
      id: updateAsset.id
    },
    data: {
      healthLevel: updateAsset.healthLevel
    }
  })

  return updateLevel
}

async function updateStatus(updateAsset: UpdateStatusData) {
  const updateStatus = await prisma.asset.update({
    where: {
      id: updateAsset.id
    },
    data: {
      status: updateAsset.status
    }
  })

  return updateStatus
}

const assetRepository = {
  createNewAsset,
  getAssetsByUnitId,
  deleteAssetById,
  updateHealthLevel,
  updateStatus
}

export default assetRepository