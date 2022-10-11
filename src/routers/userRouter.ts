import { Router } from "express";

import { createNewUser, loginUser, loginAdm, getUserByName } from "../controllers/userControllers.js";
import { newUserSchema, loginUserSchema } from "../schemas/userSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const userRouter = Router();

userRouter.post("/create/user", validateToken, validateSchema(newUserSchema), createNewUser);
userRouter.post("/signIn/:companyId", validateSchema(loginUserSchema), loginUser);
userRouter.post("/adm/signIn", validateSchema(loginUserSchema), loginAdm);
userRouter.get("/user/:name", getUserByName)

export default userRouter;