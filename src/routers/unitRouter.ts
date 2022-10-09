import { Router } from "express";

import { createNewUnit, getUnitsByCompanyId } from "../controllers/unitController.js";
import unitSchema from "../schemas/unitSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const unitRouter = Router();

unitRouter.post("/create/unit", validateToken, validateSchema(unitSchema), createNewUnit);
unitRouter.get("/get/units/:companyId", validateToken, getUnitsByCompanyId);

export default unitRouter;