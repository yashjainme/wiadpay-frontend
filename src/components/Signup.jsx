import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { InputBox, Button, Heading, SubHeading, BottomWarning } from './uiComponents'; 



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// --- Signup Page ---
export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState(""); // This is the email
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setError(""); // Clear previous errors
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/user/signup`, {
                username,
                firstName,
                lastName,
                password
            });
            localStorage.setItem("token", response.data.token); // Store token
            
            navigate("/dashboard"); 
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed. Please try again.");
            console.error("Signup error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <Heading label="Sign Up" />
                    <SubHeading label="Enter your information to create an account" />
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    <InputBox id="firstName" label="First Name" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <InputBox id="lastName" label="Last Name" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <InputBox id="email" label="Email (Username)" placeholder="john.doe@example.com" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputBox id="password" label="Password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <Button label={loading ? "Signing up..." : "Sign Up"} type="submit" disabled={loading} />
                </form>
                <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin" navigate={navigate} />
            </div>
        </div>
    );
}