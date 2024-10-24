import Transaction from "../Model/TransactionModel.js";
import User from "../model/userModel.js";

export const UserTransactions = async (req, res) => {
  const { amount, transaction } = req.body;
  const userId = req.params.id;
 
  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.json({ message: "User not found" });
    }

    if (transaction === "credit") {
      existingUser.initialamount += amount;
    } else if (transaction === "debit") {
      if (existingUser.initialamount < amount) {
        return res.json({ message: "Insufficient balance" });
      }
      existingUser.initialamount -= amount;
    } else {
      return res.json({ message: "Invalid transaction type" });
    }

    const newTransaction = new Transaction({
      amount: amount,
      transaction: transaction,
      balance: existingUser.initialamount 
    });

    const savedTransaction = await newTransaction.save();

    existingUser.transactions.push(savedTransaction._id);

    await existingUser.save();

    res.json({ message: "Transaction successful", user: existingUser, transaction: savedTransaction });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
};


export const getUserTransactionHistory = async (req, res) => {
  const userId = req.params.id; 

  try {
      const user = await User.findById(userId).populate('transactions');

      if (!user) {
          return res.json({ message: "User not found" });
      }

      res.json({ transactions: user.transactions });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
};