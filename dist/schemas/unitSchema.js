import Joi from "joi";
var unitSchema = Joi.object({
    name: Joi.string().min(4).required(),
    companyId: Joi.string().required()
});
export default unitSchema;
