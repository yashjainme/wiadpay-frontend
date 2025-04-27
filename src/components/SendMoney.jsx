
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'; 
import { InputBox, Button, Heading } from './uiComponents'; 
import { useAuthProtection } from './useAuthProtection';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function SendMoney() {
    useAuthProtection(); // Protect this route
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Get recipient details from navigation state
    const recipientId = location.state?.id;
    const recipientName = location.state?.name || "Recipient";

    // Redirect back if recipient details are missing
    useEffect(() => {
        if (!recipientId) {
            console.warn("Recipient ID missing, redirecting to dashboard.");
            navigate('/dashboard');
        }
    }, [recipientId, navigate]);

    const handleTransfer = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        if (!recipientId) {
            setError("Recipient information is missing.");
            setLoading(false);
            return;
        }

        if (Number(amount) <= 0) {
             setError("Please enter a valid amount greater than zero.");
             setLoading(false);
             return;
        }


        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error("No token found");

            const response = await axios.post(`${API_BASE_URL}/account/transfer`,
                {
                    receiver: recipientId, 
                    balance: Number(amount) 
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            setSuccess(`Successfully transferred $${Number(amount).toFixed(2)} to ${recipientName}!`);
            setAmount(""); // Clear amount after success
           
            setTimeout(() => navigate('/dashboard'), 2000);

        } catch (err) {
            setError(err.response?.data?.message || "Transfer failed. Please try again.");
            console.error("Transfer error:", err);
             if (err.message === "No token found" || err.response?.status === 403) {
                navigate('/signin'); // Redirect if unauthorized
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <Heading label="Send Money" />
                </div>

                <div className="flex items-center space-x-3 mb-6 p-3 bg-teal-50 rounded-md border border-teal-100">
                     <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100 text-teal-700 font-semibold text-lg">
                        {recipientName[0].toUpperCase()}
                    </div>
                    <p className="text-lg font-semibold text-gray-800">{recipientName}</p>
                </div>


                <form className="mt-8 space-y-6" onSubmit={handleTransfer}>
                    <InputBox
                        id="amount"
                        label="Amount (in $)"
                        placeholder="Enter amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    {error && <p className="text-sm text-red-600 text-center mb-4">{error}</p>}
                    {success && <p className="text-sm text-green-600 text-center mb-4">{success}</p>}

                    <Button
                        label={loading ? "Processing..." : "Initiate Transfer"}
                        type="submit"
                        disabled={loading || !amount || Number(amount) <= 0} // Disable if loading or amount is invalid
                    />
                </form>
                 <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full mt-4 text-center text-sm font-medium text-gray-600 hover:text-gray-800"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}