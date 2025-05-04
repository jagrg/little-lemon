// Footer
import Logo from "../assets/footerLogo.jpg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-col logo-col">
                <img
                    src={Logo}
                    alt="Little Lemon Logo"
                    className="footer-logo"
                />
            </div>

            <nav className="footer-col" aria-label="Doormat Navigation">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>

            <div className="footer-col">
                <h3>Contact</h3>
                <address>
                    <ul>
                        <li>123 Main Street, Chicago</li>
                        <li>(123) 456-7890</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </address>
            </div>

            <div className="footer-col">
                <h3>Social Media</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
