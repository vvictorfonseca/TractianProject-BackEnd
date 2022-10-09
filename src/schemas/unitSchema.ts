import Joi from "joi";
import { CreateUnitData } from "../services/unitService.js";

const unitSchema = Joi.object<CreateUnitData>({
  name: Joi.string().min(4).required(),
  companyId: Joi.string().required()
});

export default unitSchema;