export const updateNewReviewForm = (name, value) => {
    return {
        type: "UPDATE_NEW_REVIEW_FORM", 
        formData: { name, value }
    }
}

export const createReview = reviewData => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/reviews", { 
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
// Check what the credentials are

        body: JSON.stringify(reviewData)
        })
        .then(r => r.json())
        .then(console.log)
    }
}