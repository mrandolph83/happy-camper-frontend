export const updateNewReviewForm = (name, value) => {
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

export const createReview = reviewData => {
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
                }
            })
            .catch(console.log)
        }
    }
            
            