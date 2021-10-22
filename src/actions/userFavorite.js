
export const addUserFavorite = userFavorite => {
    return {
        type: "ADD_USER_FAVORITE",
        userFavorite
    }
}

export const createUserFavorites = (rec_area_id, user_id) => {
    console.log(rec_area_id, user_id)
    return  dispatch => {

        return fetch("http://127.0.0.1:3000/api/v1/add_user_favorite", {
            credentials: "include",  
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rec_area_id, user_id)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                console.log(response.data)
                dispatch(addUserFavorite(response.data))
            }
        })
        .catch(console.log)
    }
}