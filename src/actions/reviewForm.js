
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
        id: review.id,
        date: review.attributes.date,
        description: review.attributes.description,
        picture: review.attributes.picture,
        rec_area_id: review.attributes.rec_area_id,
        nature_review: review.attributes.nature_review,
        amenities_review: review.attributes.amenities_review,
        activities_review: review.attributes.activities_review,
        family_review: review.attributes.family_review,
        user_id: review.attributes.user_id   
    }
    
    return {
        
        type: "EDIT_REVIEW_FORM_DATA",
        reviewFormData
    }
}

