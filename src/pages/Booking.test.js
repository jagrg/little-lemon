import { render, screen } from "@testing-library/react";
import Booking from "./Booking";
import { MemoryRouter } from "react-router-dom";

test("renders the booking form heading", () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { name: /reserve a table/i });
    expect(heading).toBeInTheDocument();
});

test("renders the Reserve button", () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /reserve/i });
    expect(button).toBeInTheDocument();
});

