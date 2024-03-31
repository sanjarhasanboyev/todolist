import { Request, Response } from "express";
import { createUser, deleteUserById, editUserById, findUserById, getAllUsers } from "../services/user.service";
import { User } from "../model/user.dto";
import moment from "moment";
import { UserResponseDTO } from "../model/userResponseDTO";



// get user
export async function getUserPage(req: Request, res: Response) {
    try {
        const foundUser = await getAllUsers();
        const usersData: UserResponseDTO[] = [];

        for (let i = 0; i < foundUser.length; i++) {
            const date = moment(foundUser[i].date).format('DD.MM.YYYY')
            usersData.push({
                id: i + 1,
                originalId: foundUser[i].id,
                name: foundUser[i].name,
                surname: foundUser[i].surname,
                email: foundUser[i].email,
                salary: foundUser[i].salary,
                dateString: date
            })
        }

        // sorting asc-desc
        // usersData.sort((a: any, b: any) => a.originalId - b.originalId);
        

        res.render('user-list', {
            addUserPage: true,
            usersData
        });
    } catch (error) {
        console.log("listni olishda xatolik");
    }
}

export function getAddUserPage(req: Request, res: Response) {
    res.render('add-user');
}

export function logout(req: Request, res: Response) {
    res.render('logout')
}



// create user
export async function addUser(req: Request, res: Response) {
    try {
        const { name, surname, email, salary, date } = req.body;

        console.log(date);

        const creatingUser: User = {
            name, surname, email, salary, date
        }

        const createdUser = await createUser(creatingUser);
        console.log("user created");
        res.redirect('/user-list');

    } catch (error) {
        console.log("xatolik", error);
    }
}



// get edit user
export async function getEditUser(req: Request, res: Response) {
    try {
        const user = await findUserById(+req.params.id);
        res.render('edit-user', {
            user
        })
    } catch (error) {
        console.log("xatolik", error);
    }
}


// update user by ud
export async function editUser(req: Request, res: Response) {
    try {
        const { name, surname, email, salary, date } = req.body;

        const editedUser: User = {
            name, surname, email, salary, date
        }

        await editUserById(+req.params.id, editedUser);
        res.redirect('/user-list')
        console.log("User Edited");
    } catch (error) {
        console.log(error);
    }
}


// delete user
export async function deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    await deleteUserById(+id);
    res.redirect('/user-list'); 
    console.log("User deleted");
}