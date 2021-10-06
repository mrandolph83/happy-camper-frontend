// Called "setMyTrips on Globetrotter" 
export const setUserFavorites = userFavorite => {
    return {
        type: "ADD_USER_FAVORITE",
        userFavorite
    }
}

export const getUserFavorites = () => {
    return  dispatch => {

        return fetch("http://127.0.0.1:3000/api/v1/user_favorites", {
            credentials: "include",  
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                dispatch([])(getUserFavorites)
            }
        })
        .catch(console.log)
    }
}