import React from "react"
import PropTypes from "prop-types"
import styles from "./Display.module.css"

function Display({ input }) {
    return (
        <div className={styles.Display}>
            <p>{input}</p>
        </div>
    )
}

Display.propTypes = {
    input: PropTypes.string.isRequired,
}

export default Display
