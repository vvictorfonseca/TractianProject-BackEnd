import { Request, Response } from "express";
import assetService, { CreateAssetData } from "../services/assetService.js";

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

export { createNewAsset, getAssetsByUnitId, deleteAssetById }