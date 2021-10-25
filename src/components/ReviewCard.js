import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'



const ReviewCard = ({ review }) => {
  return (
    review ?
      <div>
        <h3>{review.attributes.description}</h3>
        <p>{review.attributes.picture}</p>
      <Link to={`/reviews/${review.id}/edit`} params={{ testvalue: "hello" }}>Edit this review</Link>
      </div> :
      <p>This the the Trip card with no trip!</p>
     
  )
}

export default ReviewCard;