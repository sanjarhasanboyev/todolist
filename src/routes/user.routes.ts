import { Router } from "express";
import { getUserPage, getAddUserPage, logout, addUser, getEditUser, editUser, deleteUser } from "../controllers/user";
const router = Router();


// user: get
router.get('/user-list', getUserPage);
router.get('/add-user', getAddUserPage);
router.get('/logout', logout);


// user: post
router.post('/add-user', addUser);
router.post('/users/edit/:id', editUser);


// user: put
router.get('/users/edit/:id', getEditUser);

// user: delete
router.get("/users/delete/:id", deleteUser);

export default router;