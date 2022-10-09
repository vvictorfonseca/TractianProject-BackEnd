import { Router } from "express";

import { createNewAsset, getAssetsByUnitId } from "../controllers/assetController.js";
import assetSchema from "../schemas/assetSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const assetRouter = Router();

assetRouter.post("/create/asset", validateToken, validateSchema(assetSchema), createNewAsset);
assetRouter.get("/get/assets/:unitId", validateToken, getAssetsByUnitId);

export default assetRouter