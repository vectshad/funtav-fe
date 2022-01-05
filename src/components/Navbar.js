import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">
                <h2>Fun Tav</h2>
            </Link>
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
            <Link to="/logout">
                <button className="Logout" onClick={ () => localStorage.clear()}>Log out</button>
            </Link>
        </div>
    )
}

export default Navbar;
