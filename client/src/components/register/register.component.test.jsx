import {render, screen} from "@testing-library/react"
import RegisterComponent from "./register.component"
import userEvent from "@testing-library/user-event";

describe("Register Component Test Suite", () => {

    test('should have necessary controls to be present', () => {
        render(<RegisterComponent />);

        const firstName = screen.getByRole('textbox', {name: /first name/i});
        const lastName = screen.getByRole('textbox', { name: /last name/i});

        const username = screen.getByRole('textbox', {name: /user name/i});
        const email = screen.getByRole('textbox', {name: /email/i});

        const password = screen.getByLabelText("Password")
        const confirmPassword = screen.getByLabelText("Confirm Password")

        const submitBtn = screen.getByRole('button', {name: 'Register'})

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(username).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();

        expect(submitBtn).toBeInTheDocument();
    });

    test.only("sends a request when clicked on submit button", async () => {
        const user = userEvent.setup();

        render(<RegisterComponent />);

        const registerBtn = screen.getByRole('button', {name: 'Register'});

        await user.click(registerBtn);
    })
})