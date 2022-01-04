import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/mypackages">
                <button>My Packages</button>
            </Link>
            <Link to="/custompackage">
                <button>Custom Packages</button>
            </Link>
            <Link to="/about">
                <button>About Us</button>
            </Link>
        </div>
    )
}

export default Navbar;
