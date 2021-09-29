
//synchronous action creators
export const recAreaSearch = searchApi => {
    return {
        type: "REC_AREA_QUERY",
        searchApi
    }
}

//async action creators

// Search API for indexded Results

export const recAreaUserSearch = searchParams => {
    console.log(searchParams)
    // const keyword = "Yosemite"
    // const stateCodes = "CA, OH, "
    // const activity = "11, 2, "
    // return  dispatch => {

    //     return fetch(`https://ridb.recreation.gov/api/v1/recareas?query=${keyword}&limit=50&offset=0&full=true&state=${stateCodes}&activity=${activity}&sort=Name`, {
    //         // credentials: "include", 
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "apikey": "c7e1bfea-aea3-436f-a007-619276d7bc13"
    //             // Make into .env for security 
    //         },
    //         body: JSON.stringify(searchParams)
    //     })

    //     .then(r => r.json())
    //     .then(response => {
    //        console.log(response) 
            
    //     })
    // }
}

// export const clearIndex = () => {
//     return (dispatch) => {
//         dispatch(clearCurrentUser())
//         return fetch("http://127.0.0.1:3000/api/v1/logout", {
//             credentials: "include",
//             method: "DELETE"
//         })
//     } 
// }


// export const getCurrentUser = () => {
   
//     return  dispatch => {

//         return fetch("http://127.0.0.1:3000/api/v1/get_current_user", {
//             credentials: "include",  
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         })

//         .then(r => r.json())
//         .then(response => {
//             if (response.error) {
//                 alert(response.error)
//             }
//             else {
//                 dispatch(setCurrentUser(response.data))
//             }
//         })
//         .catch(console.log)
//     }

    
// }