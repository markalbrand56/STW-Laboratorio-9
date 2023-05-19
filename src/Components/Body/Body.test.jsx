import React from "react"
import { describe, it, expect, vi } from "vitest"
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
    it("can click on buttons", () => {
        const handleClick = vi.fn()
        render(<Body buttons={[["1", "2", "3"]]} handleClick={handleClick} />)

        const element = screen.getByText("1")
        element.click()
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
