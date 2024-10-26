import express from "express";
import { Addadmin, AdminLogin, GetAllUsers, GetUserById, GetUsersCount, getUserTransactionById } from "../Control/BankController.js";
import Authentication from "../auth.js";

const router = express.Router();
router.post("/add", Addadmin);
router.post("/login", AdminLogin);
router.get("/home",Authentication,GetUsersCount);
router.get("/viewusers", Authentication, GetAllUsers);
router.get("/viewusers/:id", Authentication, GetUserById);
router.get("/viewtransaction/:id", Authentication, getUserTransactionById);


export default router;