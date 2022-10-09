import { Router } from "express";

import { createNewCompany, getCompanies, getCompanyById } from "../controllers/companyController.js";
import companySchema from "../schemas/companySchema.js";
import validateToken from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const companyRouter = Router();

companyRouter.post("/create/company", validateToken, validateSchema(companySchema), createNewCompany);
companyRouter.get("/get/companies", getCompanies);
companyRouter.get("/get/:companyId", validateToken, getCompanyById)


export default companyRouter;