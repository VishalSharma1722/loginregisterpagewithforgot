import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setToken } from "../utils/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            const token = btoa(JSON.stringify(user));
            setToken(token);
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <p>
                <Link to="/forgot-password">Forgot Password?</Link>
            </p>
        </form>
    );
};

export default Login;
