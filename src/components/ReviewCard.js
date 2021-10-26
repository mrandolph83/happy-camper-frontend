import React from 'react'
import {Link} from 'react-router-dom'



const ReviewCard = ({ review }) => {
  return (
    review ?
      <div>
        <h4>{review.attributes.description}</h4>
        <p>Activities Review: {review.attributes.activities_review}</p>
        <p>Amenities Review: {review.attributes.amenities_review}</p>
        <p>Nature Review: {review.attributes.nature_review}</p>
        <p>Family Review: {review.attributes.family_review}</p>
      <Link to={`/reviews/${review.id}/edit`} >Edit this review</Link>
      </div> : " "     
  )
}

export default ReviewCard;