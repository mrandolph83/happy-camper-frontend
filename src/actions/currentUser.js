//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//async action creators
export const login = credentials => {
    return  dispatch => {

        return fetch("http://127.0.0.1:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "mrandolph83", password: "password"})
        })
    }

    
}