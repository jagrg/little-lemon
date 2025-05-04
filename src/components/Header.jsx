// Header
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.jpg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="Little Lemon logo" />
            </Link>

            <button
                className="menu-toggle"
                onClick={toggleMenu}
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <nav
                className={`nav ${isOpen ? "open" : ""}`}
                aria-label="Primary navigation"
            >
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking">Reservation</Link>
                    </li>
                    <li>
                        <Link to="/">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
