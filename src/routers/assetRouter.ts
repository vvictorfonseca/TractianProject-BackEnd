import { Router } from "express";

import { createNewAsset, getAssetsByUnitId, deleteAssetById, updateHealthLevel, updateStatus } from "../controllers/assetController.js";
import assetSchema from "../schemas/assetSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const assetRouter = Router();

assetRouter.post("/create/asset", validateToken, validateSchema(assetSchema), createNewAsset);
assetRouter.get("/get/assets/:unitId", validateToken, getAssetsByUnitId);
assetRouter.delete("/delete/:assetId", validateToken, deleteAssetById);
assetRouter.put("/update/healthLevel", validateToken, updateHealthLevel);
assetRouter.put("/update/status", validateToken, updateStatus);

export default assetRouter