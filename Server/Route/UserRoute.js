import express from 'express'
import { AddUser } from '../Control/Usercontroller.js';
import { upload } from '../Multer.js';

const router =express.Router();

router.post('/register',upload.single('image'), AddUser);

export default router;