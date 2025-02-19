import { jwtDecode } from "jwt-decode";

// Save token to localStorage
export const setToken = (token) => {
    localStorage.setItem("token", token);
};

// Get token from localStorage
export const getToken = () => {
    return localStorage.getItem("token");
};

// Remove token (logout)
export const removeToken = () => {
    localStorage.removeItem("token");
};

// Decode user from JWT
export const getUser = () => {
    const token = getToken();
    return token ? jwtDecode(token) : null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
    return !!getToken();
};
