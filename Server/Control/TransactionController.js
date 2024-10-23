// import Transaction from "../Model/TransactionModel.js";
import User from "../model/userModel.js";

// export const AmountTransactions = async(req,res)=>{
//     const {amount,transaction}= req.body
//     const userid = req.params.id
//     try {
//         const exsistingUser= await User.findById(userid)
//         if(!exsistingUser){
//             return res.json({message:"User not found"})
//         }
//         if(transaction=="credit"){
//         exsistingUser.initialamount+=amount
//         }if(transaction=="debit"){
//             exsistingUser.initialamount-=amount
//         }
//         let user = await exsistingUser.save()
//         res.json({message:"deposited",user})
//     } catch (error) {
//         console.log(error);

//     }
// }

export const Deposited = async (req, res) => {
  const { amount } = req.body;
  const userid = req.params.id;
  try {
    const transaction = "credited";
    const exsistingUser = await User.findById(userid);
    if (!exsistingUser) {
      return res.json({ message: "User not found" });
    }
    exsistingUser.initialamount += amount;

    let user = await exsistingUser.save();
    res.json({ message: transaction, amount, balance: user.initialamount });
  } catch (error) {
    console.log(error);
  }
};
export const Withdrawed = async (req, res) => {
  const { amount } = req.body;
  const userid = req.params.id;
  try {
    const transaction = "Debited";
    const existingUser = await User.findById(userid);

    if (!existingUser) {
      return res.json({ message: "User not found" });
    }
    if (existingUser.initialamount - amount < 0) {
      return res.json({ message: "Insufficient Balance" });
    }

    existingUser.initialamount -= amount;

    let user = await existingUser.save();
    res.json({ message: transaction, amount, balance: user.initialamount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred during withdrawal." });
  }
};
