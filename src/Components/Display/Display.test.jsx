import React from "react"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import Display from "./Display"

describe("Display", () => {
    it("renders Display component", () => {
        render(<Display input="" />)
    })
    it("renders Display component with input", () => {
        render(<Display input="1" />)

        const element = screen.getByText("1")
        expect(element).toBeInTheDocument()
    })
    it("only renders nine digits", () => {
        render(<Display input="1234567890" />)

        const element = screen.getByText("123456789")
        expect(element).toBeInTheDocument()
    })
    it("displays Error when input is Error", () => {
        render(<Display input="Error" />)

        const element = screen.getByText("Error")
        expect(element).toBeInTheDocument()
    })
})
