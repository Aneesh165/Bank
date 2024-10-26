import React, { useEffect, useState } from "react";
import Bank from "../../assets/Bank.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewUserTransactions = () => {
  const { userId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/admin/viewtransaction/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTransactions(response.data.transactions);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [userId]);

  if (loading) {
    return <div>Loading transactions...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-[35%]">
        <img src={Bank} alt="Bank" className="w-full h-full object-right" />
      </div>

      <div className="w-[65%] p-10 bg-teal-200 flex flex-col">
        <div className="flex items-center mb-6">
          <img
            className="rounded-full w-[70px] h-[70px] object-cover"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            {transactions.map((transaction, index) => {
              const transactionDate = new Date(transaction.date);
              const formattedDate = transactionDate.toLocaleDateString("en-GB");

              return (
                <tr key={index}>
                  <td>{formattedDate}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.transaction}</td>
                  <td>${transaction.amount}</td>
                  <td>${transaction.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUserTransactions;
