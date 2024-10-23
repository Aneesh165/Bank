import express from 'express';
import { AddUser, uploadImage, UserHome, UserLogin } from '../Control/Usercontroller.js';
import { AmountTransactions } from '../Control/TransactionController.js';

const router = express.Router();

router.post('/register', uploadImage, AddUser);
router.post('/login',UserLogin);
router.get('/:id',UserHome);
router.post('/:id',AmountTransactions)

export default router;
