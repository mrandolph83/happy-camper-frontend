const initialState = {
    recAreaId: "",
    name: "",
    city: "",
    stateCode: "",
    description: "",

   
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "REC_AREA_QUERY_RESULTS":
            return action.results
        default:
            return state
    }
}

