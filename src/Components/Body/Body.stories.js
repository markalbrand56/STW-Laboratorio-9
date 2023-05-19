import Body from "./Body"

export default {
    title: "Components/Body",
    component: Body,
    tags: ["autodocs"],
    argTypes: {}
}

export const base = {
    args: {
        buttons: [
            ["C", "±", "%", "÷"],
            ["7", "8", "9", "x"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "="],
        ],
    },
}
