//synchronous action creators

export const recAreaResults = results => {
    return {
        type: "REC_AREA_QUERY_RESULTS",
        results
    }
}


//async action creators
export const recAreaUserSearch = (recSearchParams, history) => {
    console.log("recSearch params are", recSearchParams)
    
    return dispatch => {
    

        return fetch("http://127.0.0.1:3000/api/v1/rec_area_search", {
            
        credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recSearchParams)
        })

        .then(r => r.json())
        .then(editedParkList => {
            console.log(editedParkList)
          dispatch(recAreaResults(editedParkList.data))
          history.push('/rec_areas')
          
          
            
})}}

// export const recAreaShowPage = (, history) => {
//     console.log("recSearch params are", recSearchParams)
    
//     return dispatch => {
    

//         return fetch("http://127.0.0.1:3000/api/v1/rec_area_search", {
            
//         credentials: "include", 
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(recSearchParams)
//         })

//         .then(r => r.json())
//         .then(editedParkList => {
//             console.log(editedParkList)
//           dispatch(recAreaResults(editedParkList.data))
//           history.push('/rec_areas')
          
          
            
// })}}