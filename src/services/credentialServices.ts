import { CredentialArray, CredentialInsertData } from "../types/credentialTypes.js";
import * as credentialRepository from "../repositories/credentialRepository.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

export async function createCredential(credential: CredentialInsertData) {
  const { username, password, title, userId } = credential;
  if (!credential || !username || !password || !title || !userId)
    throw { code: "Dimiss", message: "Verifique todos os campos!" };
  if (!!(await credentialRepository.verifyIfExists({ userId, title })))
    throw { code: "NotAllowed", message: "Credencial já cadastrada!" };
  await credentialRepository.create({
    username,
    password: encriptPassword(password),
    title,
    userId,
  });
}

export async function findManyByUserId(userId: number, credentialId: number) {
  if (!userId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const credentials = await credentialRepository.findManyByUserId(
    userId,
  );
  if (!credentials)
    throw { code: "NotFound", message: "Essa credencial não existe..." };
  return credentials
}

export async function findByCredentialId(credentialId: number) {
  if (!credentialId) throw { code: "Dimiss", message: "Parâmetro 'id' vazio!" };
  const credentials = await credentialRepository.findManyByUserId(
     credentialId
  );
  if (!credentials)
    throw { code: "NotFound", message: "Essa credencial não existe..." };
  return credentials
}

function encriptPassword(password: string) {
  const cryptr = new Cryptr(process.env.SECRET_KEY || "231d3fg45a6dfg21");
  return cryptr.encrypt(password);
}

function decriptPassword(encripted_password: string) {
  const cryptr = new Cryptr(process.env.SECRET_KEY || "231d3fg45a6dfg21");
  return cryptr.decrypt(encripted_password);
}
