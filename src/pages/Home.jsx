// Home
import Button from "../components/Button";
import Card from "../components/Card";
import Salad from "../assets/greek-salad.jpg";
import Bruchetta from "../assets/bruchetta.jpg";
import Pasta from "../assets/pasta.jpg";
import Testimonial from "../components/Testimonial";
import About from "../components/About";

const Home = () => {
    return (
        <main>
            <section className="menu-section">
                <h1 className="menu-section-title">This Week's Specials</h1>
                <Button label="Menu" onClick={() => console.log("Clicked")} />
                <div className="card-row">
                    <Card
                        image={Salad}
                        title="Greek Salad"
                        price="12.99"
                        description="The famous greek salad of crispy lettuce, peppers and citrus dressing."
                    />
                    <Card
                        image={Bruchetta}
                        title="Bruschetta"
                        price="7.99"
                        description="Made from grilled bread topped with tomatoes, garlic, and basil."
                    />
                    <Card
                        image={Pasta}
                        title="Pasta"
                        price="10.75"
                        description="Home-made pasta with fresh tomato sauce, spices and herbs."
                    />
                </div>
            </section>
            <section className="testimonial-section">
                <h1 className="testimonial-title">Our customers love us!</h1>
                <div className="testimonial-row">
                    <Testimonial
                        name="Sophia"
                        quote="The best meal I've had in ages. Super fresh!"
                    />
                    <Testimonial
                        name="Emily"
                        quote="Incredible service and a cozy atmosphere."
                    />
                    <Testimonial
                        name="Mark"
                        quote="I loved the dessert. Highly recommend!"
                    />
                    <Testimonial
                        name="Joseph"
                        quote="The flavors were incredible. I can't wait to come back!"
                    />
                </div>
            </section>
            <section>
                <About />
            </section>
        </main>
    );
};

export default Home;
