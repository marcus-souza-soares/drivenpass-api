import { Router } from "express";
import { getCredencials, createCredential, getCredencialById } from "../controllers/credentialController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js"

const credentialRouter = Router();

credentialRouter.get("/credentials", authMiddleware, getCredencials);
credentialRouter.post("/insert/credential", authMiddleware, createCredential)
credentialRouter.get("/credential/:id", authMiddleware, getCredencialById)

export default credentialRouter;