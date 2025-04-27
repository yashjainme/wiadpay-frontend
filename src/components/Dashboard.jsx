import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, AppBar } from './uiComponents';
import { useAuthProtection } from './useAuthProtection';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function Dashboard() {
    useAuthProtection();
    const [balance, setBalance] = useState(0);
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [loadingBalance, setLoadingBalance] = useState(true);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [error, setError] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const navigate = useNavigate();

    // Fetch Balance
    useEffect(() => {
        const fetchBalance = async () => {
            setLoadingBalance(true);
            setError("");
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error("No token found");

                const response = await axios.get(`${API_BASE_URL}/account/balance`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBalance(response.data.balance);
                // Assuming we have user data in localStorage or we fetch it separately
                setUserFirstName(localStorage.getItem('userFirstName') || 'User');
            } catch (err) {
                setError("Failed to fetch balance.");
                console.error("Balance fetch error:", err);
                if (err.message === "No token found" || err.response?.status === 403) {
                    navigate('/signin');
                }
            } finally {
                setLoadingBalance(false);
            }
        };
        fetchBalance();
    }, [navigate]);

    // Fetch Users based on filter (debounced)
    useEffect(() => {
        const handler = setTimeout(() => {
            const fetchUsers = async () => {
                if (filter.trim().length < 2) {
                    setUsers([]);
                    setLoadingUsers(false);
                    return;
                }
                
                setLoadingUsers(true);
                setError("");
                try {
                    const token = localStorage.getItem('token');
                    if (!token) return;

                    const response = await axios.get(`${API_BASE_URL}/user/bulk?filter=${filter}`);
                    setUsers(response.data.users);
                } catch (err) {
                    setError("Failed to fetch users.");
                    console.error("Users fetch error:", err);
                } finally {
                    setLoadingUsers(false);
                }
            };
            fetchUsers();
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [filter]);

    const handleSendMoney = (user) => {
        navigate('/send', { state: { id: user._id, name: `${user.firstName} ${user.lastName}` } });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AppBar userFirstName={userFirstName} />

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Balance Card */}
                <div className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Your Balance</h2>
                    {loadingBalance ? (
                        <div className="h-8 w-32 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                        <p className="text-3xl font-bold text-gray-900">${Number(balance).toFixed(2)}</p>
                    )}
                    {error && !loadingBalance && <p className="text-sm text-red-600 mt-2">{error}</p>}
                </div>

                {/* Users Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Send Money</h2>
                    <div className="mb-4 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search users by name..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        />
                    </div>

                    {/* User List */}
                    <div className="space-y-2">
                        {loadingUsers ? (
                            <div className="flex justify-center py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                            </div>
                        ) : filter.trim().length < 2 ? (
                            <p className="text-gray-500 text-center py-4">Type at least 2 characters to search</p>
                        ) : users.length > 0 ? (
                            users.map(user => (
                                <div key={user._id} className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm">
                                            {user.firstName[0].toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">{user.firstName} {user.lastName}</p>
                                            <p className="text-xs text-gray-500">{user.username}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleSendMoney(user)}
                                        className="px-3 py-1 text-xs font-medium rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                    >
                                        Send
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center py-4">No users found matching your search.</p>
                        )}
                        {error && !loadingUsers && <p className="text-sm text-red-600 mt-2">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}