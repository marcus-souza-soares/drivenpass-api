import { Request, Response } from "express";
import * as credentialServices from "../services/credentialServices.js";
import { CredentialArray } from "../types/credentialTypes.js"

export async function createCredential(req: Request, res: Response) {
  const credential = req.body;
  await credentialServices.createCredential(credential);
  res.status(201).send("OK");
}
export async function getCredencialById(req: Request, res: Response){
  const userId = res.locals.user.id;
  const credentialId = Number(req.params.id);
  if(!credentialId || credentialId % 1 !== 0) return res.status(422).send("insira o id corretamente!");
  const credential = await credentialServices.findByCredentialId(userId, credentialId);
}

export async function getCredencialsByUserId(req: Request, res: Response){
  const { id } = res.locals.user;
  const credentials: CredentialArray[] = await credentialServices.findByUserId(id);
}