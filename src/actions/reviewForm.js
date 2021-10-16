

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
        user_id: review.attributes.user_id,
        date: review.attributes.date,
        rec_area_id: review.attributes.rec_area_id,
        nature_review: review.attributes.nature_review,
        amenities_review: review.attributes.amenities_review,
        activities_review: review.attributes.activities_review,
        family_review: review.attributes.family_review
        
        // Populate rest of data to set up for edit
    }
    
    return {
        
        type: "EDIT_REVIEW_FORM_DATA",
        reviewFormData
    }
}

        
// Check what the credentials are


