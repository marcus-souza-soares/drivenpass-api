import { Router } from "express";
import userRouter from "./userRoutes.js";
import credentialRouter from "./credentialRouter.js";
import cardRouter from "./cardsRouter.js";
import noteRouter from "./notesRouter.js"

const router = Router();
router.use(userRouter);
router.use(credentialRouter);
router.use(cardRouter);
router.use(noteRouter)

export default router;

