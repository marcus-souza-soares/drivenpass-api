import { Router } from "express";
import { getCredencials, createCredential } from "../controllers/credentialController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js"

const credentialRouter = Router();

credentialRouter.get("/credentials", authMiddleware, getCredencials);
credentialRouter.post("/insert/credential", authMiddleware, createCredential)

export default credentialRouter;