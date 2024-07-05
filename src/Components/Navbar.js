import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4">
            <ul className="flex space-x-4">
                <Link to="/" className="text-blue-600">Home</Link>
                <Link to="/tasks" className="text-blue-600">Tasks</Link>
                <Link to="/profile" className="text-blue-600">Profile</Link>
            </ul>
        </nav>
    );
};

export default Navbar;