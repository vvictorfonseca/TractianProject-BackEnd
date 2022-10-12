import Joi from "joi"
import { CreateAssetData } from "../services/assetService.js"

const assetSchema = Joi.object<CreateAssetData>({
  name: Joi.string().min(4).required(),
  image: Joi.string().required(),
  model: Joi.string().required(),
  owner: Joi.string().required(),
  description: Joi.string().min(8).required(),
  status: Joi.valid("Running", "Alerting", "Stopped").required(),
  healthLevel: Joi.number().required(),
  unitId: Joi.string().required()
})

export default assetSchema