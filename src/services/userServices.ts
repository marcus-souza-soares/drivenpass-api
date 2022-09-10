import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
<<<<<<< HEAD
import { UserIsertData, User } from "../types/userTypes.js";
=======
import { user } from "../../types/userTypes.js";
>>>>>>> f33364b444f389b85e8b0d61b4de72de0836a553


dotenv.config();

export async function login(email:string, password:string){
    const user = await findUserByEmail(email);
    if(!user || !comparePassword(password, user.password)) throw { code: "NotFound", message: "Verifique os campos novamente!"};
    const token = buildToken(user);
    return token;
}

export async function createUser( user: UserIsertData
    
) {
    const { email, password, name} = user
    if(!!await findUserByEmail(email)) throw { code: "NotAloweed", message: "Usuaŕio já cadastrado!"};
    await userRepository.createUser({ email, password: encriptPassword(password), name });
}

function encriptPassword(pass: string) {
    const crypted_password = bcrypt.hashSync(pass, 6);
    return crypted_password;
}
function comparePassword(pass:string, userPass:string){
    return bcrypt.compareSync(pass, userPass);
}

export async function findUserByEmail(email: string){
    const user = await userRepository.findUserByEmail(email);
    return user;
}
<<<<<<< HEAD
function buildToken(user: User){
    const jwtKey = process.env.SECRET_KEY;
    const config = { expiresIn: process.env.EXPIRES_TOKEN || "1h"}
    return jwt.sign({user}, jwtKey, config);
=======
function buildToken(user: user){
    const jwtKey = process.env.SECRET_KEY;
    const config = { expiresIn: process.env.EXPIRES_TOKEN || "1h"}
    return jwt.sign(user, jwtKey, config);
>>>>>>> f33364b444f389b85e8b0d61b4de72de0836a553
}
