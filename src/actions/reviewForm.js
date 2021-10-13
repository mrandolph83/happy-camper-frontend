

// sync actions
export const updateReviewForm = (name, value) => {
    return {
        type: "UPDATE_NEW_REVIEW_FORM", 
        formData: { name, value }
    }
}

export const addReview = review => {
    return {
        type: "ADD_REVIEW",
        review
    }
}

export const resetReviewForm = () => {
    return {
        type: "RESET_NEW_REVIEW_FORM", 
    }
}


export const editReviewFormData = review => {
    const reviewFormData = {
        user_id: review.attributes.user_id
        // Populate rest of data to set up for edit
    }
    return {
        type: "EDIT_REVIEW_FORM_DATA",
        reviewFormData
    }
}

        
// Check what the credentials are


export const getMyReviews = () => {
    return dispatch => {
    return fetch("http://127.0.0.1:3000/api/v1/reviews",{
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
            console.log(response.data)
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
                    history.push('/account')
                    // dispatch(resetReviewFormForm())
                    
                    // redirects to user account to review the data
                }
            })
            .catch(console.log)
        }
    }
            
            