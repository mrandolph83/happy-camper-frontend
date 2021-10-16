import React from 'react';
import { createReview } from '../actions/myReviews.js'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

const NewReviewFormContainer = ({history, createReview}) => {


    const handleSubmit = (newReviewData, user_id, history) => {
        
        createReview(
           {...newReviewData, user_id}, history)
     }

     return <ReviewForm history={history} handleSubmit={handleSubmit} />
};
export default connect(null, { createReview })(NewReviewFormContainer);