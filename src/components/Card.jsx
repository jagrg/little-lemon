import Button from "./Button";

const Card = ({ image, title, price, description }) => {
    return (
        <article className="card">
            <img src={image} alt={`Dish: ${title}`} className="card-image" />
            <div className="card-body">
                <header className="card-header">
                    <h2>{title}</h2>
                    <span className="card-price">${price}</span>
                </header>
                <p className="card-description">{description}</p>
                <Button label="Order" />
            </div>
        </article>
    );
};

export default Card;
