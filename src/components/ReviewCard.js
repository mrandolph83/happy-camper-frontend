import React from 'react'
import {Link} from 'react-router-dom'

const ReviewCard = ({ review }) => {
  return (
    review ?
      <div>
        <h3>{review.attributes.name}</h3>
        <p>{review.attributes.start_date}</p>
        <p>{review.attributes.end_date}</p>
        <Link to={`/reviews/${review.id}/edit`}>Edit this review</Link>
      </div> :
      <p>This the the Review card with no review!</p>
  )
}

export default ReviewCard