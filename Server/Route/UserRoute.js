import express from "express";
import {
  AddUser,
  uploadImage,
  UserDeposit,
  UserHome,
  UserLogin,
  UserWithdraw,
} from "../Control/Usercontroller.js";
import { Deposited, Withdrawed } from "../Control/TransactionController.js";

const router = express.Router();

router.post("/register", uploadImage, AddUser);
router.post("/login", UserLogin);
router.get("/:id", UserHome);

router.get("/deposit/:id", UserDeposit);
router.post("/deposit/:id", Deposited);

router.get("/withdrawl/:id", UserWithdraw);
router.post("/withdrawl/:id", Withdrawed);

export default router;
