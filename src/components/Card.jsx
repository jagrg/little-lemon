import Button from "./Button";

const Card = ({ image, title, price, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-body">
                <div className="card-header">
                    <h2>{title}</h2>
                    <span className="card-price">${price}</span>
                </div>
                <p className="card-description">{description}</p>
                <Button label="Order" />
            </div>
        </div>
    );
};

export default Card;
