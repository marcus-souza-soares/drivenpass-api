import { Router } from "express";
import userRouter from "./userRoutes.js";
import credentialRouter from "./credentialRouter.js";
import cardRouter from "./cardsRouter.js"

const router = Router();
router.use(userRouter);
router.use(credentialRouter);
router.use(cardRouter);

export default router;

