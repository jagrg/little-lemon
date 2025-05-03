// Button

const Button = ({ label, onClick, type = "button", style = {} }) => {
    return (
        <button
            className="btn-primary"
            type={type}
            onClick={onClick}
            style={style}
        >
            {label}
        </button>
    );
};

export default Button;
