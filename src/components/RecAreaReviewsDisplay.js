import React from 'react'




const RecAreaReviewsDisplay = ({reviews}) => {

    console.log(reviews)
    const reviewEntries = reviews.length > 0 ?
    reviews.map(review => (
   <>
 
    

    
    <h3>{review.activities_review}</h3>
    <h3>{review.description}</h3>
    

    </>
    
    
    )) : ""
    
return reviewEntries

}


export default RecAreaReviewsDisplay;