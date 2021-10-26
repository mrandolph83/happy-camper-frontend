const initialState = {
    rec_area_id: ""
  

}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SEED_REC_AREA_ID_TO_REVIEW":
            return action.recAreaId
                
            
        default:
            return state
    }
}

