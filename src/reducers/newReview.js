const initialState = {
    user_id: "",
    rec_area_id: "",
    description: "",
    picture: "",
    nature_review: "",
    amenities_review: "",
    activities_review: "",
    family_review: ""

}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_REVIEW_FORM":
            return action.formData
        case "RESET_NEW_REVIEW_FORM":
            return initialState
        default:
            return state
    }
}