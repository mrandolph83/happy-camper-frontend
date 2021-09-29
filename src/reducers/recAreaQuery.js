export default (state = null, action) => {
    switch (action.type) {
        case "REC_AREA_QUERY":
            return action.rec_area
        default:
            return state
    }
}