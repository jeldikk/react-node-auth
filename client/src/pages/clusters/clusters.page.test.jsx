import {render, screen} from "@testing-library/react"
import ClustersPage from "./clusters.page"
import {expect, test} from 'vitest'


describe("ClustersPage Test Suite", () => {
    test("should have a header with Clusters in it", () => {
        render(<ClustersPage />)
        const element = screen.getByRole('heading', {name: /clusters/i});
        expect(element).toBeInTheDocument();
    })
})