import React from "react"
import PropTypes from "prop-types"
import styles from "./Body.module.css"

function Body({ buttons, handleClick }) {
    return (
        <div className={styles.Body}>
            {buttons.map((row, index) => (
                <div key={row[index]} className={styles.Row}>
                    {row.map((button, j) => {
                        let buttonClass = styles.Button
                        if (index === 0) {
                            buttonClass += ` ${styles.FirstRow}`
                        }
                        if (j === 3) {
                            buttonClass += ` ${styles.LastFromRow}`
                        }

                        if (button === "0") {
                            buttonClass += ` ${styles.Zero}`
                        }

                        return (
                            <button
                                key={button}
                                className={buttonClass}
                                type="button"
                                onClick={() => handleClick(button)}
                            >
                                {button}
                            </button>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

Body.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Body
