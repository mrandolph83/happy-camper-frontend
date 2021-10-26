import React from 'react'

const RecAreaReviewsDisplay = ({reviews}) => {

    const reviewEntries = reviews.length > 0 ?
    reviews.map(review => (
   <>
    <p>{review.description}</p> 
    <p><em>Activity Review: {review.activities_review} </em> <em>Amenities Review: </em>{review.amenities_review}
    <em>Family Review: </em>{review.family_review}<em>Nature Review: </em>{review.nature_review}</p>
    </>
    )) : ""
    
return reviewEntries
}

export default RecAreaReviewsDisplay;