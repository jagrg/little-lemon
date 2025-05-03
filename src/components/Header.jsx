import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="Little Lemon logo" />
            </Link>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/booking">Booking</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
