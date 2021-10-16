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

export const deleteReviewInStore = reviewId => {
  return {
      type: "DELETE_REVIEW_IN_STORE",
      reviewId
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
                    // redirects to user account to review the data
                }
            })
            .catch(console.log)
        }
    }

    
    
    export const updateReview = (reviewData, history) => {
        console.log("update data is", reviewData)
        return dispatch => {
          const reviewId = reviewData.id
          console.log(reviewId)
  
          const sendableReviewData = {
            date: reviewData.date,
            description: reviewData.description,
            picture: reviewData.picture,
            rec_area_id: reviewData.rec_area_id,
            nature_review: reviewData.nature_review,
            amenities_review: reviewData.amenities_review,
            activities_review: reviewData.activities_review,
            family_review: reviewData.family_review
          }
        return fetch(`http://127.0.0.1:3000/api/v1/reviews/${reviewId}`, { 
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(sendableReviewData)
            })

            .then(r => r.json())
            .then(review => {
                if (review.error) {
                    alert(review.error)}
                    else {
                        dispatch(updateReviewInStore(review.data))
                        dispatch(resetReviewForm())
                    history.push(`/reviews/${review.data.id}`)
                        // dispatch(resetReviewFormForm())
                        
                        // redirects to user account to review the data
                    }
                })
                .catch(console.log)
            }
        }

        export const deleteReview = (reviewId, history) => {
          
          return dispatch => {
            
            console.log(reviewId)
    
           
          return fetch(`http://127.0.0.1:3000/api/v1/reviews/${reviewId}`, { 
              credentials: "include",
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json"
              },
              })
  
              .then(r => r.json())
              .then(review => {
                  if (review.error) {
                      alert(review.error)}
                      else {
                          dispatch(deleteReviewInStore(reviewId))
                          dispatch(resetReviewForm())
                      history.push('/account')
                          // dispatch(resetReviewFormForm())
                          
                          // redirects to user account to review the data
                      }
                  })
                  .catch(console.log)
              }
          }
            
            