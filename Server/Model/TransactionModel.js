import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),  
  },
  time: {
    type: String, 
        default: new Date().toLocaleTimeString(), 
  },
  amount: {
    type: Number,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;
