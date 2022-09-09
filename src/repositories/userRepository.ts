import prisma from "../database/prismaClient.js";
import { user } from "../../types/userTypes";

type userType = Omit<user, "id">

export async function createUser(user: userType){
    await prisma.users.create({data: user});
}

export async function findUserByEmail(email:string){
    const user = await prisma.users.findUnique({
        where: {
            email
        }
    })
    return user;
}