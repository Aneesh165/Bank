import express from "express";
import { Addadmin, AdminLogin, GetAllUsers } from "../Control/BankController.js";
import Authentication from "../auth.js";

const router = express.Router();
router.post("/add", Addadmin);
router.post("/login", AdminLogin);
router.get("/home",Authentication,GetAllUsers);


export default router;