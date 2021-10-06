export default (state = [], action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return action.favorites
        default: return state
    }
}



