import React from 'react';

import { useNavigate } from 'react-router-dom';

// Input Component with Label
export function InputBox({ label, placeholder, onChange, type = "text", value, id }) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition sm:text-sm"
                required
            />
        </div>
    );
}

// Standard Button Component
export function Button({ label, onClick, type = "button", disabled = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                disabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
            } transition duration-150 ease-in-out`}
        >
            {label}
        </button>
    );
}

// Heading Component
export function Heading({ label }) {
    return <h1 className="text-3xl font-bold text-gray-900 text-center">{label}</h1>;
}

// SubHeading Component
export function SubHeading({ label }) {
    return <p className="text-gray-500 text-sm text-center mt-2">{label}</p>;
}

// Bottom Warning Component (for Signin/Signup links)
export function BottomWarning({ label, buttonText, to, navigate }) {
    return (
        <p className="text-sm text-gray-600 text-center mt-6">
            {label}
            <button
                onClick={() => navigate(to)}
                className="font-medium text-teal-600 hover:text-teal-500 underline ml-1"
            >
                {buttonText}
            </button>
        </p>
    );
}

// App Bar Component (for Dashboard)
export function AppBar({ userFirstName }) {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear token
        navigate("/signin"); // Redirect to signin
    };

    return (
        <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                     {/* Left side: Logo and Brand Name */}
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
                       
                        <span className="text-2xl font-bold text-gray-800">WiadPay</span>
                    </div>

                    {/* Right side: User Info & Logout */}
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-700">
                            Hello, {userFirstName || 'User'}
                        </span>
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm">
                            {userFirstName ? userFirstName[0].toUpperCase() : 'U'}
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1.5 text-sm font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition duration-150 ease-in-out"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



