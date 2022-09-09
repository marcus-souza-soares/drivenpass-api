import { Request, Response, NextFunction } from "express";
import { object } from "joi";
import jwt from "jsonwebtoken";

export function userMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!req.headers) {
    return res.status(401).send("Acesso não autorizado.");
  }
  const token = authorization?.replace("Bearer ", "");
  const secret_key = process.env.SECRET_KEY;
  const user = jwt.verify(token, secret_key);
  if (user) {
    res.locals.userId = user;
    console.log(user);
    next();
  } else {
    res.status(404).send("Error ao validar o usuário");
  }
}
