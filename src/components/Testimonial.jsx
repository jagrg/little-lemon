// Testimonial

const Testimonial = ({ name, quote }) => {
    return (
        <div className="testimonial">
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-quote">"{quote}"</p>
        </div>
    );
};

export default Testimonial;
