import Joi from "joi";
import { CreateCompanyData } from "../services/companyService.js";

const companySchema = Joi.object<CreateCompanyData>({
  name: Joi.string().min(4).required()
});

export default companySchema;