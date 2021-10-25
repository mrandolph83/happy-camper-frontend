import React from 'react';
import { createReview } from '../actions/myReviews.js'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

const NewReviewFormContainer = ({history, match, createReview}) => {

    
    const handleSubmit = (newReviewData, user_id, rec_area_id) => {
        console.log(user_id)
        console.log(rec_area_id)
        createReview(
           {...newReviewData, user_id, rec_area_id}, history)
     }

     return <ReviewForm rec_area_id={match.params.id} history={history} handleSubmit={handleSubmit} />
};
export default connect(null, { createReview })(NewReviewFormContainer);