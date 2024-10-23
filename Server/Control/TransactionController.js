// import Transaction from "../Model/TransactionModel.js";
import User from "../model/userModel.js";


export const AmountTransactions = async(req,res)=>{
    const {amount,transaction}= req.body
    const userid = req.params.id
    try {
        const exsistingUser= await User.findById(userid)
        if(!exsistingUser){
            return res.json({message:"User not found"})
        }
        if(transaction=="credit"){
        exsistingUser.initialamount+=amount 
        }if(transaction=="debit"){
            exsistingUser.initialamount-=amount
        }
        let user = await exsistingUser.save()
        res.json({message:"deposited",user})
    } catch (error) {
        console.log(error);
        
    }
}