import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, removeToken } from "../utils/auth";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            {isAuthenticated() ? (
                <>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
