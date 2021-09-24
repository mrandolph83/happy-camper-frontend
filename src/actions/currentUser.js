//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//async action creators
export const login = credentials => {
    console.log(credentials)
    return  dispatch => {

        return fetch("http://127.0.0.1:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })

        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }
            else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }

    
}