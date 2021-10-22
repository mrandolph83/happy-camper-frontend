const initialState = {
    user_id: "",
    rec_area_id: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return action.userFavorite
        default: return state
    }
}



