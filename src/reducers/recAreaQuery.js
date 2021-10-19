

export default (state = [], action) => {
    switch (action.type) {
        case "REC_AREA_QUERY_RESULTS":
            return action.results
        default:
            return state
    }
}

