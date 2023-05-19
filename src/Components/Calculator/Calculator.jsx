import React, { useState } from "react"
import styles from "./Calculator.module.css"
import Display from "../Display/Display"
import Body from "../Body/Body"

function Calculator() {
    const [input, setInput] = useState("0")
    const [cache, setCache] = useState(null)
    const [operator, setOperator] = useState(null)

    const botones = [
        ["C", "±", "%", "÷"],
        ["7", "8", "9", "x"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
    ]

    const handleClick = (value) => {
        if (input === "Error" && value !== "C") return

        switch (value) {
            case "C":
                setInput("0")
                setCache(null)
                setOperator(null)
                break
            case "±":
                setInput((prev) => (parseFloat(prev) * -1).toString())
                break
            case "%":
                setInput((prev) => (parseFloat(prev) / 100).toString())
                break
            case ".":
                if (!input.includes(".")) {
                    setInput((prev) => `${prev}.`)
                }
                break
            case "+":
                if (operator !== null) {
                    if (operator === "+") {
                        setCache((prev) => prev + parseFloat(input))
                    } else if (operator === "-") {
                        setCache((prev) => prev - parseFloat(input))
                    } else if (operator === "x") {
                        setCache((prev) => prev * parseFloat(input))
                    } else if (operator === "÷") {
                        setCache((prev) => prev / parseFloat(input))
                    }
                } else {
                    setCache(parseFloat(input))
                }

                setOperator("+")
                setInput("0")
                break
            case "-":
                if (operator !== null) {
                    if (operator === "+") {
                        setCache((prev) => prev + parseFloat(input))
                    } else if (operator === "-") {
                        setCache((prev) => prev - parseFloat(input))
                    } else if (operator === "x") {
                        setCache((prev) => prev * parseFloat(input))
                    } else if (operator === "÷") {
                        setCache((prev) => prev / parseFloat(input))
                    }
                } else {
                    setCache(parseFloat(input))
                }

                setOperator("-")
                setInput("0")
                break
            case "x":
                if (operator !== null) {
                    if (operator === "+") {
                        setCache((prev) => prev + parseFloat(input))
                    } else if (operator === "-") {
                        setCache((prev) => prev - parseFloat(input))
                    } else if (operator === "x") {
                        setCache((prev) => prev * parseFloat(input))
                    } else if (operator === "÷") {
                        setCache((prev) => prev / parseFloat(input))
                    }
                } else {
                    setCache(parseFloat(input))
                }

                setOperator("x")
                setInput("0")
                break
            case "÷":
                if (operator !== null) {
                    if (operator === "+") {
                        setCache((prev) => prev + parseFloat(input))
                    } else if (operator === "-") {
                        setCache((prev) => prev - parseFloat(input))
                    } else if (operator === "x") {
                        setCache((prev) => prev * parseFloat(input))
                    } else if (operator === "÷") {
                        setCache((prev) => prev / parseFloat(input))
                    }
                } else {
                    setCache(parseFloat(input))
                }

                setOperator("÷")
                setInput("0")
                break
            case "=":
                if (!operator) return

                switch (operator) {
                    case "+":
                        setInput((prev) =>
                            (cache + parseFloat(prev)).toString()
                        )
                        break
                    case "-":
                        setInput((prev) =>
                            (cache - parseFloat(prev)).toString()
                        )
                        break
                    case "x":
                        setInput((prev) =>
                            (cache * parseFloat(prev)).toString()
                        )
                        break
                    case "÷":
                        setInput((prev) =>
                            (cache / parseFloat(prev))
                                .toString()
                                .substring(0, 10)
                        )
                        break
                    default:
                        break
                }
                setOperator(null)
                setCache(input)
                break
            default:
                if (input.length > 10) {
                    setInput("Error")
                    return
                }
                setInput(input === "0" ? value : input + value)
        }
    }

    if (input.toString().length > 10) {
        setInput("Error")
    }

    return (
        <div className={styles.Calculator}>
            <Display input={input} />
            <Body buttons={botones} handleClick={handleClick} />
        </div>
    )
}

export default Calculator
