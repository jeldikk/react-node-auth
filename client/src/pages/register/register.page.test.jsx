import {render, screen} from "@testing-library/react";
import RegisterPage from "./register.page";

describe("Register Page Test Suite", () => {

    test("basic header test", () => {
        render(<RegisterPage />);

        const registerHeading = screen.getByRole('heading', { name: /register/i});

        expect(registerHeading).toBeInTheDocument();
    })
})