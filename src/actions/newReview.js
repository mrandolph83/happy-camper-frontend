export const updateNewReviewForm = (name, value) => {
    return {
        type: "UPDATE_NEW_REVIEW_FORM", 
        formData: { name, value }
    }
}


        
// Check what the credentials are


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
        .then(editedParkList => {
          console.log(editedParkList)
            
})}}