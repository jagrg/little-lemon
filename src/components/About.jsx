import Mario from "../assets/Mario.jpg";
import Adrian from "../assets/Adrian.jpg";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves
                    simple food and classic cocktails in a lively but casual
                    environment. The restaurant features a locally sourced menu
                    with daily specials. Little Lemon is a charming neighborhood
                    bistro that serves simple food and classic cocktails in a
                    lively but casual environment. The restaurant features a
                    locally sourced menu with daily specials.
                </p>
            </div>
            <div className="about-image">
                <img src={Adrian} alt="Adrian Inside Little Lemon restaurant" />
                <img src={Mario} alt="Mario Inside Little Lemon restaurant" />
            </div>
        </section>
    );
};

export default About;
