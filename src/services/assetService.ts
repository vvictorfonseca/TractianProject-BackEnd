import { Asset } from "@prisma/client";

import assetRepository from "../repositories/assetRepository.js";

export type CreateAssetData = Omit<Asset, "id">
export type UpdateAssetData = Omit<Asset, "name" | "image" | "model" | "description" | "owner" | "status" | "unitId">
export type UpdateStatusData = Omit<Asset, "name" | "image" | "model" | "description" | "owner" | "healthLevel" | "unitId">

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

async function updateHealthLevel(updateAsset: UpdateAssetData) {
  return await assetRepository.updateHealthLevel(updateAsset)
}

async function updateStatus(updateStatus: UpdateStatusData) {
  return await assetRepository.updateStatus(updateStatus)
}

const assetService = {
  createNewAsset,
  getAssetsByUnitId,
  deleteAssetById,
  updateHealthLevel,
  updateStatus
}

export default assetService