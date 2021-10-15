import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    review ?
      <div>
        <h3>{review.attributes.description}</h3>
        <p>{review.attributes.picture}</p>
      </div> :
      <p> This is the trip card! </p>
     
  )
}

export default ReviewCard;