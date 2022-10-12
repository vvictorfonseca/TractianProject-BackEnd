import { Request, Response } from "express";
import assetService, { CreateAssetData, UpdateAssetData, UpdateStatusData } from "../services/assetService.js";

async function createNewAsset(req: Request, res: Response) {
  const newAsset: CreateAssetData = req.body

  await assetService.createNewAsset(newAsset)

  return res.sendStatus(201) 
}

async function getAssetsByUnitId(req:Request, res: Response) {
  const unitId: string = req.params.unitId

  const assets = await assetService.getAssetsByUnitId(unitId)

  return res.status(200).send(assets)
}

async function deleteAssetById(req: Request, res: Response) {
  const assetId: string = req.params.assetId

  await assetService.deleteAssetById(assetId)

  return res.sendStatus(201)
}

async function updateHealthLevel(req: Request, res: Response) {
  const updateAsset: UpdateAssetData = req.body

  await assetService.updateHealthLevel(updateAsset)

  return res.sendStatus(201)
}

async function updateStatus(req: Request, res: Response) {
  const updateStatus: UpdateStatusData = req.body

  await assetService.updateStatus(updateStatus)

  return res.sendStatus(201)
}



export { createNewAsset, getAssetsByUnitId, deleteAssetById, updateHealthLevel, updateStatus }