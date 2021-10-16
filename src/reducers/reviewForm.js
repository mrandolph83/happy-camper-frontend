const initialState = {
    user_id: "",
    rec_area_id: "",
    date: "",
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
            return {
                ...state,
                [action.formData.name]: action.formData.value
                
            }
            case "EDIT_REVIEW_FORM_DATA":
                return action.reviewFormData
        case "RESET_NEW_REVIEW_FORM":
            return initialState
        default:
            return state
    }
}