import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema({
    amount:{
        type:Number
    },
    transaction:{
        type:String
    },
    date:{
        type:Date,
        default:new Date(),
    }
})

const Transaction = mongoose.model('Transaction',TransactionSchema)
export default Transaction;