import React from "react"
import { render, screen } from "@testing-library/react"

import Body from "./Body"

describe("Body", () => {
    it("renders Body component", () => {
        render(<Body buttons={[]} handleClick={() => {}} />)
    })
    it("renders Body component with buttons", () => {
        render(<Body buttons={[["1", "2", "3"]]} handleClick={() => {}} />)

        const element = screen.getByText("1")
        expect(element).toBeInTheDocument()

        const element2 = screen.getByText("2")
        expect(element2).toBeInTheDocument()

        const element3 = screen.getByText("3")
        expect(element3).toBeInTheDocument()
    })
})
