import { render, screen } from "@testing-library/react";
import MigrationsPage from "./migrations.page";

test("should have a heading", () => {
    render(<MigrationsPage />);

    const heading = screen.getByRole('heading', {name: /migrations/i});
    expect(heading).toBeInTheDocument();
})