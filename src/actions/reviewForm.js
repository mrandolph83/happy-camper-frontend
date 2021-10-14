

// sync actions
export const updateReviewForm = (name, value) => {
    return {
        type: "UPDATE_NEW_REVIEW_FORM", 
        formData: { name, value }
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


