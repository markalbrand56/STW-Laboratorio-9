import React from "react"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import Calculator from "./Calculator"

describe("Calculator", () => {
    it("renders Calculator component", () => {
        render(<Calculator />)
    })
    it("renders Calculator component with Body", () => {
        render(<Calculator />)

        const element = screen.getByText("C")
        expect(element).toBeInTheDocument()
    })
})
