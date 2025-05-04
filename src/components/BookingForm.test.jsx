import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";

describe("BookingForm", () => {
    test("renders inputs with correct validation attributes", () => {
        render(<BookingForm onSubmit={() => {}} />);

        expect(screen.getByLabelText(/full name/i)).toBeRequired();
        expect(screen.getByLabelText(/date/i)).toBeRequired();
        expect(screen.getByLabelText(/time/i)).toBeRequired();

        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toBeRequired();
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");

        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    });

    test("shows error when guests number is too low", async () => {
        render(<BookingForm onSubmit={() => {}} />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        fireEvent.change(guestsInput, { target: { value: "0" } });

        const msg = await screen.findByText(
            /perfect for an intimate dining experience/i
        );
        expect(msg).toBeInTheDocument();
    });

    test("shows error when guests number is too high", async () => {
        render(<BookingForm onSubmit={() => {}} />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        fireEvent.change(guestsInput, { target: { value: "11" } });

        const msg = await screen.findByText(/for groups larger than 10/i);
        expect(msg).toBeInTheDocument();
    });

    test("does not show error for valid guest count", async () => {
        render(<BookingForm onSubmit={() => {}} />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        fireEvent.change(guestsInput, { target: { value: "4" } });

        expect(
            screen.queryByText(/perfect for an intimate dining experience/i)
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText(/for groups larger than 10/i)
        ).not.toBeInTheDocument();
    });

    test("submits form with valid data", () => {
        const mockSubmit = jest.fn();
        render(<BookingForm onSubmit={mockSubmit} />);

        fireEvent.change(screen.getByLabelText(/full name/i), {
            target: { value: "John Doe" }
        });
        fireEvent.change(screen.getByLabelText(/date/i), {
            target: { value: "2025-05-10" }
        });
        fireEvent.change(screen.getByLabelText(/time/i), {
            target: { value: "18:00" }
        });
        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: { value: 3 }
        });
        fireEvent.change(screen.getByLabelText(/occasion/i), {
            target: { value: "birthday" }
        });

        fireEvent.click(screen.getByText(/reserve/i));

        expect(mockSubmit).toHaveBeenCalledWith({
            name: "John Doe",
            date: "2025-05-10",
            time: "18:00",
            guests: 3,
            occasion: "birthday"
        });
    });
});
