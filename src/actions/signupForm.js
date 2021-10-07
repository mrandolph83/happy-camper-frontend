export const updateSignupForm = (formData) => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignupForm = (formData) => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}