import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyReviews, clearReviews } from "./myReviews.js"

//synchronous action creators
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//async action creators

// Exported object that goes to Login.js component
export const login = (credentials, history) => {
    
    return  dispatch => {
        return fetch("http://127.0.0.1:3000/api/v1/login", {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })

        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                dispatch(setCurrentUser(response.data))
                dispatch(getMyReviews())
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        dispatch(clearReviews())

        return fetch("http://127.0.0.1:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    } 
}

export const signup = (credentials, history) => {
    return  dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://127.0.0.1:3000/api/v1/signup", {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })

        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            }
            else {
                
                dispatch(setCurrentUser(response.data))
                dispatch(getMyReviews())
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
   
    return  dispatch => {
        console.log("GEtting current user")
        return fetch("http://127.0.0.1:3000/api/v1/get_current_user", {
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
                dispatch(setCurrentUser(response.data))
            }
        })
        .catch(console.log)
    }

    
}