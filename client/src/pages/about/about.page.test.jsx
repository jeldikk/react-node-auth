import {render, screen} from "@testing-library/react"
import AboutPage from "./about.page"
import { expect, test } from "vitest"


describe("AboutPage Test Suite", () => {
    test("should have a header with About in it", () => {
        render(<AboutPage />)
        const element = screen.getByRole('heading', {name: /about/i});
        expect(element).toBeInTheDocument();
    })
})