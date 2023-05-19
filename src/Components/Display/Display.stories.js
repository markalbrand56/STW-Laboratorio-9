import Display from "./Display"

export default {
    title: "Components/Display",
    component: Display,
    tags: ["autodocs"],
    argTypes: {},
}

export const SmallNumber = {
    args: {
        input: "123",
    },
}

export const LargeNumber = {
    args: {
        input: "9999999",
    },
}

export const LargestNumber = {
    args: {
        input: "-999999999",
    },
}
