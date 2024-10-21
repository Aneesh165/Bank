import express from 'express';
import { AddUser, uploadImage } from '../Control/Usercontroller.js';

const router = express.Router();

router.post('/register', uploadImage, AddUser);

export default router;
