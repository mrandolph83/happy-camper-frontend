import { resetReviewForm } from './reviewForm'
// synchronous actions
export const setMyReviews = reviews => {
  return {
    type: "SET_MY_REVIEWS",
    reviews
  }
}

export const addReview = review => {
    return {
        type: "ADD_REVIEW",
        review
    }
}

export const updateReviewInStore = review => {
    return {
        type: "UPDATE_REVIEW_IN_STORE",
        review
    }
}

export const clearReviews = () => {
  return {
    type: "CLEAR_REVIEWS"
  }
}

export const getMyReviews = () => {
    return dispatch => {
      return fetch("http://127.0.0.1:3000/api/v1/reviews", {
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
          } else {
            dispatch(setMyReviews(response.data))
          }
        })
        .catch(console.log)
    }
  }

export const createReview = (reviewData, history) => {
    console.log("reviewData is", reviewData)
    return dispatch => {
    return fetch("http://127.0.0.1:3000/api/v1/reviews", { 
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify(reviewData)
        })

        .then(r => r.json())
        .then(review => {
            if (review.error) {
                alert(review.error)}
                else {
                    dispatch(addReview(review.data))
                    dispatch(resetReviewForm())
                    history.push('/account')
                    // dispatch(resetReviewFormForm())
                    
                    // redirects to user account to review the data
                }
            })
            .catch(console.log)
        }
    }

    export const updateReview = (reviewData, history) => {
        console.log("reviewData is", reviewData)
        return dispatch => {
        return fetch(`http://127.0.0.1:3000/api/v1/reviews/${reviewData.id}`, { 
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(reviewData)
            })

            .then(r => r.json())
            .then(review => {
                if (review.error) {
                    alert(review.error)}
                    else {
                        dispatch(updateReviewInStore(review.data))
                        history.push('/account')
                        // dispatch(resetReviewFormForm())
                        
                        // redirects to user account to review the data
                    }
                })
                .catch(console.log)
            }
        }
            
            