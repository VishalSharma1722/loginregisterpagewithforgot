import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Protected Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                {/* Error Page for Invalid Routes */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
