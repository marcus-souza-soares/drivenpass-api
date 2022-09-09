import { Router } from "express";

const userRouter = Router();

userRouter.post("/", () => console.log("Deu certo!"));

export default userRouter;