import express from "express";
import {AddUser,uploadImage,UserDeposit,UserHome,UserLogin,UserProfile,UserWithdraw,} from "../Control/Usercontroller.js";
import { UserTransactions } from "../Control/TransactionController.js";

const router = express.Router();

router.post("/register", uploadImage, AddUser);
router.post("/login", UserLogin);
router.get("/:id", UserHome);

router.get("/deposit/:id", UserDeposit);
router.post('/transaction/:id',UserTransactions)
router.get("/withdrawl/:id", UserWithdraw);

router.get("/profile/:id", UserProfile);

export default router;
