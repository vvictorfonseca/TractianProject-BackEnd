import Joi from "joi";
var companySchema = Joi.object({
    name: Joi.string().min(4).required()
});
export default companySchema;
