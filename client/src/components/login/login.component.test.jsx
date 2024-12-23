import { logRoles, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import LoginComponent from "./login.component";

describe("LoginComponent Test Suite", () => {
    test("should have a username, password input controls and a button to submit", () => {
        const {container} = render(<LoginComponent />);
        // logRoles(container)
        let usernameEle = screen.getByRole('textbox', {name: /user name/i});
        let passwordEle = screen.getByLabelText(/password/i)
        let submitButton = screen.getByRole('button', {name: /login/i});

        expect(usernameEle).toBeInTheDocument();
        expect(passwordEle).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

})