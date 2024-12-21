import {render, screen} from "@testing-library/react"
import LoginPage from "./login.page"
import { expect, test } from "vitest"


describe("LoginPage Test Suite", () => {
    test("should have a header with Login in it", () => {
        render(<LoginPage />)
        const element = screen.getByRole('heading', {name: /login/i});
        expect(element).toBeInTheDocument();
    })
})