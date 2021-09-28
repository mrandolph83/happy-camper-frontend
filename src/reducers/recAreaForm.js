const initialState = {
    activity1: "",
    activity2: "",
    activity3: "",
    activity4: "",
    activity5: "",
    stateCode1: "",
    stateCode2: "",
    stateCode3: "",
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