import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRouter from './Route/Userroute.js';
import BankRouter from './Route/BankRoute.js'
import cors from 'cors'

const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.Mongo_Url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/user', UserRouter);
app.use('/admin', BankRouter);


app.listen(process.env.PORT, () => {
  console.log(`Connected to Port: ${process.env.PORT}`);
});
