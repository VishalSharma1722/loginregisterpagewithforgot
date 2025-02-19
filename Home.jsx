import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Home = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [navigate]);

    return <h1>Welcome to Home Page</h1>;
};

export default Home;
