import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },username:{
        type:String,
        required:true
    },address:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },age:{
        type:String,
        required:true
    },phone:{
        type:String,
        required:true
    },dob:{
        type:String,
        required:true
    },adhar:{
        type:String,
        required:true
    },initialamount:{
        type:Number,
        required:true
    },password:{
        type:String,
        required:true
    },pancard:{
        type:String,
        required:true
    },image:{
        type:String,
        required:true
    },
    accountno:{
        type:String
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction' 
      }]
    
})

const User = mongoose.model('User',userschema)
export default User;