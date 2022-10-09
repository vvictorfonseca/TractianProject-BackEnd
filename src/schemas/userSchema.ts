import Joi from "joi";
import { CreateUserData, CreateLoginData } from "../services/userService.js";

const newUserSchema = Joi.object<CreateUserData>({
  fullName: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  isAdm: Joi.boolean(),
  companyId: Joi.string().required()
});

const loginUserSchema = Joi.object<CreateLoginData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export { newUserSchema, loginUserSchema };