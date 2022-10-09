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

const assetService = {
  createNewAsset,
  getAssetsByUnitId
}

export default assetService