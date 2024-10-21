import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRouter from './Route/UserRoute.js'

const app=express()

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.Mongo_Url)
.then(() => {
    console.log("Database Connected-----");
    
}).catch((error) => {
    console.log(error);
});

app.use('/user',UserRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Connected to Port:${process.env.PORT}`);
})


