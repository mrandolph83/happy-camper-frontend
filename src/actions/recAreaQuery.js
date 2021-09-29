
//synchronous action creators
// export const recAreaSearch = searchApi => {
//     return {
//         type: "REC_AREA_QUERY",
//         searchApi
//     }
// }



//async action creators

// Search API for indexded Results
const apiQuery = "https://ridb.recreation.gov/api/v1/recareas?query=Yosemite&limit=50&offset=0&full=true&state=CO,VA,NC&activity=4,5,2,18&sort=Name"
export const recAreaUserSearch = recSearchParams => {
    const activity1 = `${recSearchParams.activity1}, `
    const activity2 = `${recSearchParams.activity2}, `
    const activity3 = `${recSearchParams.activity3}, `
    const activity4 = `${recSearchParams.activity4}, `
    const activity5 = `${recSearchParams.activity5}, `
    const stateCode1 = recSearchParams.stateCode1
    const stateCode2 = recSearchParams.stateCode2
    const stateCode3 = recSearchParams.stateCode3
    const keywords = recSearchParams.keywords
    // const apiQuery = `https://ridb.recreation.gov/api/v1/recareas?query=${keywords}&limit=50&offset=0&full=true&state=${stateCode1}${stateCode2}${stateCode3}&activity=${activity1}${activity2}${activity3}${activity4}${activity5}$&sort=Name`
    

   

        return fetch(apiQuery, {
            // credentials: "include", 
            method: "GET",
            headers: {
                // "accept": "application/json",
                "Apikey": "c7e1bfea-aea3-436f-a007-619276d7bc13"
                // Make into .env for security 
            },
            // body: JSON.stringify(recSearchParams)
        })

        .then(r => r.json())
        .then(response => {
           console.log(response) 
            
        })
    

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