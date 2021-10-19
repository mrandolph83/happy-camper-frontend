const initialState = {
    activity1: "",
    stateCode1: "",
    keywords: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_REC_FORM":
            return action.formData
        default:
            return state
    }
}