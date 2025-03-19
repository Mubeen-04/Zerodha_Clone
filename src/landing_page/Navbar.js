import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: darkMode ? "#121212" : "#FFF", color: darkMode ? "white" : "black" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" to="/signup">Signup</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/product">Product</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/pricing">Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/support">Support</Link></li>
                    </ul>
                    
                    {/* Dark Mode Toggle Button */}
                    <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
                        {darkMode ? "🌞 Light" : "🌙 Dark"}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
