import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p>
                    We are a family owned Mediterranean
                    <br />
                    restaurant, focused on traditional
                    <br />
                    recipes served with a modern twist.
                </p>
                <Link style={{ textDecoration: "none" }} to="/booking">
                    <Button label="Reserve Table" />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
