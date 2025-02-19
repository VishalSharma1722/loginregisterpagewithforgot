import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let userIndex = users.findIndex(user => user.email === email);
        if (userIndex === -1) {
            setMessage("Email not found!");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("Password successfully updated! Redirecting to login...");

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleResetPassword}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Reset Password</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ForgotPassword;
