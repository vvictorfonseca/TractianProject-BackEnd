import Joi from "joi";
var newUserSchema = Joi.object({
    fullName: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    isAdm: Joi.boolean(),
    companyId: Joi.string().required()
});
var loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});
export { newUserSchema, loginUserSchema };
