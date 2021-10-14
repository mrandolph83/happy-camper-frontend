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

// potential future dispatch actions to put to use to fully 
// clear state. Make actions to clear within each action/reducer

        // dispatch(clearUserFavorites())
        // dispatch(clearUserReviews())
        return fetch("http://127.0.0.1:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    } 
}

export const signup = (credentials, history) => {
    console.log("credentials are", credentials)
    return  dispatch => {
// credentials must be added to a key (user: credentials) before being sent to backend
// so that ActionController can read it as a new object to be created with these attributes
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
                // dispatch(getUserFavorites())
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