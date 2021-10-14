import React from 'react';
import { createReview } from '../actions/myReviews.js'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

const NewReviewFormContainer = ({history, createReview}) => {


    const handleSubmit = (event, newReviewData, user_id, history) => {
        event.preventDefault()
        createReview(
           {...newReviewData, user_id}, history)
     }

     return <ReviewForm history={history} handleSubmit={handleSubmit} />
};
export default connect(null, { createReview })(NewReviewFormContainer);