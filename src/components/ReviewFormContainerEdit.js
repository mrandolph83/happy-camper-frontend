
import React from 'react';
import { editReviewFormData, resetReviewForm } from '../actions/reviewForm.js'
import { updateReview, deleteReview } from '../actions/myReviews.js'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

class EditReviewFormContainer extends React.Component {

   
componentDidMount(){
this.props.review && this.props.editReviewFormData(this.props.review)
}

componentDidUpdate(prevProps) {
    this.props.review && !prevProps.review && this.props.editReviewFormData(this.props.review)
  }

  componentWillUnmount() {
    this.props.resetReviewForm()
  }


// Look into differences between making classes
    handleSubmit = (newReviewData, user_id) => {
    console.log("Edit review form")
    const { updateReview, history} = this.props
    updateReview(
           {...newReviewData}, history)
     }

     render() {
        const { history, deleteReview, review } = this.props 
        const reviewId = review ? review.id : null
   
        
        return <>
        
        <ReviewForm editMode handleSubmit={this.handleSubmit} />
        <button onClick={()=> deleteReview(reviewId, history)}> Delete Review </button>

        </>
    }
};




export default connect(null, { updateReview, resetReviewForm, deleteReview, editReviewFormData })(EditReviewFormContainer);