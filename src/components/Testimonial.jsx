// Testimonial

const Testimonial = ({ name, quote }) => {
    return (
        <figure className="testimonial">
            <blockquote className="testimonial-quote">"{quote}"</blockquote>
            <figcaption className="testimonial-name">— {name}</figcaption>
        </figure>
    );
};

export default Testimonial;
