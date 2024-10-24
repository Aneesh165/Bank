import Transaction from "../Model/TransactionModel.js";
import User from "../model/userModel.js";

export const UserTransactions = async (req, res) => {
  const { amount, transaction } = req.body;
  const userId = req.params.id;
  try {
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (transaction === "credit") {
      existingUser.initialamount += amount;
    } else if (transaction === "debit") {
      if (existingUser.initialamount < amount) {
        return res.status(400).json({ message: "Insufficient balance" });
      }
      existingUser.initialamount -= amount;
    } else {
      return res.status(400).json({ message: "Invalid transaction type" });
    }
    await existingUser.save();
    const newTransaction = new Transaction({
      date: new Date(),
      amount: amount,
      transaction: transaction,
      balance: existingUser.initialamount,
    });
    await newTransaction.save();
    res.json({
      message: "Transaction successful",
      user: existingUser,
      transaction: newTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
