import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios: npm install axios
import { InputBox, Button, Heading, SubHeading, BottomWarning, } from './uiComponents'; // Adjust path if needed


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function Signin() {
    const [username, setUsername] = useState(""); // Email
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

     // Redirect if already logged in
     useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSignin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/user/signin`, {
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
             // Fetch user details after signin to get name for AppBar (optional)
             // You might want to fetch user details here or rely on info from signup
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Signin failed. Check credentials.");
            console.error("Signin error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
         <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <Heading label="Sign In" />
                    <SubHeading label="Enter your credentials to access your account" />
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignin}>
                    <InputBox id="email" label="Email (Username)" placeholder="john.doe@example.com" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputBox id="password" label="Password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <Button label={loading ? "Signing in..." : "Sign In"} type="submit" disabled={loading} />
                </form>
                <BottomWarning label="Don't have an account?" buttonText="Sign up" to="/signup" navigate={navigate} />
            </div>
        </div>
    );
}
