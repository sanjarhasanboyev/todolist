import { PrismaClient } from "@prisma/client";
import moment from 'moment';
import { User } from "../model/user.dto";


const prisma = new PrismaClient();
const now = moment();

// create a new user database
export function createUser(user: User) {
    return prisma.user.create({
        data: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            salary: user.salary,
            date: moment(user.date).format()
        }
    })
}


// get all user from database
export function getAllUsers() {
    return prisma.user.findMany();
}


// get user by id
export function findUserById(id: number) {
    return prisma.user.findUnique({
        where: {
            id
        }
    })
}


// update user by id
export function editUserById(id: number, user: User) {
    return prisma.user.update({
        where: {
            id
        },
        data: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            salary: user.salary,
            date: moment(user.date).format()
        }
    })
}


// delete user by id
export function deleteUserById(id: number) {
    return prisma.user.delete({
        where: {
            id
        }
    })
}