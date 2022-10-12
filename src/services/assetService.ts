import { Asset } from "@prisma/client";

import assetRepository from "../repositories/assetRepository.js";

export type CreateAssetData = Omit<Asset, "id">

async function createNewAsset(newAsset: CreateAssetData) {
  return await assetRepository.createNewAsset(newAsset)
}

async function getAssetsByUnitId(unitId: string) {
  const assets = await assetRepository.getAssetsByUnitId(unitId)

  return assets
}

async function deleteAssetById(assetId: string) {
  return await assetRepository.deleteAssetById(assetId)
}

const assetService = {
  createNewAsset,
  getAssetsByUnitId,
  deleteAssetById
}

export default assetService