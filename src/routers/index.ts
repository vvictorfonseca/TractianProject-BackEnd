import { Router } from "express";

import assetRouter from "./assetRouter.js";
import companyRouter from "./companyRouter.js";
import unitRouter from "./unitRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(assetRouter);
router.use(companyRouter);
router.use(unitRouter);
router.use(userRouter);

export default router