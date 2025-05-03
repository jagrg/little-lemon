// Booking
import { useState } from "react";
import Button from "../components/Button";

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "*Name is required";
        if (!formData.date) newErrors.date = "*Date is required";
        if (!formData.time) newErrors.time = "*Time is required";
        if (formData.guests < 1) newErrors.guests = "*At least 1 guest";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Booking submitted:", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <main className="booking-container">
            <h1>Reserve a Table</h1>
            <form onSubmit={handleSubmit} aria-label="Reservation form">
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    aria-required="true"
                />
                {errors.date && <span className="error">{errors.date}</span>}

                <label htmlFor="time">Time</label>
                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    aria-required="true"
                >
                    <option value="">Select a time</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                </select>
                {errors.time && <span className="error">{errors.time}</span>}

                <label htmlFor="guests">Number of dinners</label>
                <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                />
                {errors.guests && (
                    <span className="error">{errors.guests}</span>
                )}

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <Button
                    style={{ width: "100%", marginTop: "1em" }}
                    label="Reserve"
                    type="submit"
                    onClick={() => console.log("Submitted")}
                />
            </form>
        </main>
    );
};

export default Booking;
