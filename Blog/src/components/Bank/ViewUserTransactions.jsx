import React, { useState } from 'react';
import Bank from '../../assets/Bank.png'; 

const ViewUserTransactions = () => {
  const [transactions] = useState([
    {
      date: '12/5/2024',
      time: '12:30',
      details: 'Debit',
      amount: 1000.00,
      balance: 20000.00,
    },
    {
      date: '13/5/2024',
      time: '14:15',
      details: 'Credit',
      amount: 500.00,
      balance: 20500.00,
    },
    {
      date: '14/5/2024',
      time: '11:45',
      details: 'Debit',
      amount: 700.00,
      balance: 19800.00,
    },
  ]);

  return (
    <div className="min-h-screen flex">
      <div className="w-[35%]">
        <img src={Bank} alt="Bank" className="w-full h-full object-right" />
      </div>

      <div className="w-[65%] p-10 bg-teal-200 flex flex-col">
        <div className="flex items-center mb-6">
          <img
            className="rounded-full w-[70px] h-[70px] object-cover"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" // Replace with actual user image
            alt="User Profile"
          />
          <h2 className="ml-4 text-xl font-semibold">Jeni</h2>
        </div>

        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-y-2 border-black">
              <th className="px-4 py-2 font-semibold">Date</th>
              <th className="px-4 py-2 font-semibold">Time</th>
              <th className="px-4 py-2 font-semibold">Details</th>
              <th className="px-4 py-2 font-semibold">Amount</th>
              <th className="px-4 py-2 font-semibold">Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} >
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.time}</td>
                <td className="px-4 py-2">{transaction.details}</td>
                <td className="px-4 py-2">{transaction.amount.toFixed(2)}</td>
                <td className="px-4 py-2">{transaction.balance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUserTransactions;
