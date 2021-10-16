
import React from 'react';
import { editReviewFormData } from '../actions/reviewForm.js'
import { updateReview } from '../actions/myReviews.js'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

class EditReviewFormContainer extends React.Component {

   
componentDidMount(){
   
this.props.review && this.props.editReviewFormData(this.props.review)

}


// Look into differences between making classes
    handleSubmit = (newReviewData, user_id) => {
    console.log("Edit review form")
    const { updateReview, review, history} = this.props
    updateReview(
           {...newReviewData}, history)
     }

     render() {
        const { history, handleSubmit } = this.props 
        
        
        return <ReviewForm editMode handleSubmit={this.handleSubmit} />
    }
};




export default connect(null, { updateReview, editReviewFormData })(EditReviewFormContainer);