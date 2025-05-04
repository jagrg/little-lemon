import { useState } from "react";
import Button from "./Button";

const BookingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "*Name is required";
        if (!formData.date) newErrors.date = "*Date is required";
        if (!formData.time) newErrors.time = "*Time is required";
        if (formData.guests < 1) newErrors.guests = "*At least 1 guest";
        return newErrors;
    };

    const guestError =
        formData.guests > 10
            ? "For groups larger than 10, please contact us directly"
            : formData.guests < 1
              ? "Perfect for an intimate dining experience!"
              : "";

    const handleSubmit = (e) => {
        e.preventDefault();

        const guests = Math.min(
            Math.max(parseInt(formData.guests) || 1, 1),
            10
        );
        const cleanForm = { ...formData, guests };

        const validationErrors = validate(cleanForm);
        const guestError =
            guests > 10
                ? "For groups larger than 10, please contact us directly"
                : guests < 1
                  ? "Perfect for an intimate dining experience!"
                  : "";

        if (Object.keys(validationErrors).length === 0 && !guestError) {
            if (onSubmit) onSubmit(cleanForm);
            setSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const today = new Date().toISOString().split("T")[0];

    if (submitted) {
        return (
            <div className="confirmation">
                <h2>Thank you, {formData.name}!</h2>
                <p>
                    Your reservation for {formData.guests} has been received and
                    is confirmed.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} aria-label="Reservation form" noValidate>
            <label htmlFor="name">Full Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-describedby="nameError"
            />
            {errors.name && (
                <span id="nameError" className="error">
                    {errors.name}
                </span>
            )}

            {guestError && (
                <span id="guestsError" className="error">
                    {guestError}
                </span>
            )}

            <label htmlFor="date">Date</label>
            <input
                id="date"
                name="date"
                type="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                required
                aria-describedby="dateError"
            />
            {errors.date && (
                <span id="dateError" className="error">
                    {errors.date}
                </span>
            )}

            <label htmlFor="time">Time</label>
            <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                aria-describedby="timeError"
            >
                <option value="">Select a time</option>
                {[
                    "17:00",
                    "17:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                    "21:00",
                    "21:30"
                ].map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            {errors.time && (
                <span id="timeError" className="error">
                    {errors.time}
                </span>
            )}

            <label htmlFor="guests">Number of guests</label>
            <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
                aria-describedby="guestsError"
            />
            {errors.guests && (
                <span id="guestsError" className="error">
                    {errors.guests}
                </span>
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
            />
        </form>
    );
};

export default BookingForm;
