import {render, screen} from "@testing-library/react"
import HomePage from "./home.page"
import { expect, test } from "vitest"


describe("HomePage Test Suite", () => {
    test("should have a header with Home in it", () => {
        render(<HomePage />)
        const element = screen.getByRole('heading', {name: /home/i});
        expect(element).toBeInTheDocument();
    })
})