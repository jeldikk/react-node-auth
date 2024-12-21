import {render, screen} from "@testing-library/react"
import DashboardPage from "./dashboard.page"
import { expect, test } from "vitest"


describe("DashboardPage Test Suite", () => {
    test("should have a header with Dashboard in it", () => {
        render(<DashboardPage />)
        const element = screen.getByRole('heading', {name: /dashboard/i});
        expect(element).toBeInTheDocument();
    })
})