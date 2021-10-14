import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyReviews = props => {
    const reviewCards = props.reviews.length > 0 ?
    props.reviews.map(review => (<p key={review.id}><Link to={`/reviews/${review.id}`}> {review.attributes.description} </Link> </p>)) : null
return reviewCards 

}

const mapStateToProps = state => {
    return {
        reviews: state.myReviews
    }
}

export default connect(mapStateToProps)(MyReviews)