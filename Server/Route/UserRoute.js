import express from 'express';
import { AddUser, uploadImage, UserLogin } from '../Control/Usercontroller.js';

const router = express.Router();

router.post('/register', uploadImage, AddUser);
router.post('/login',UserLogin)

export default router;
