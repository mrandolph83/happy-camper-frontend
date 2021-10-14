
import React from 'react';
import { updateReview, editReviewFormData } from '../actions/reviewForm.js'
import ReviewForm from './ReviewForm'
import { connect } from 'react-redux'

class EditReviewFormContainer extends React.Component {
componentDidMount(){
this.props.review && this.props.editReviewFormData(this.props.review)

}
// Look into differences between making classes
    handleSubmit = (event, newReviewData, user_id, history) => {
    const { updateReview, review} = this.props
    event.preventDefault()
    updateReview(
           {...newReviewData, user_id}, history)
     }

     render() {
        const {history, handleSubmit} = this.props 
        return <ReviewForm editMode history={history} handleSubmit={handleSubmit} />
    }
};
export default connect(null, { updateReview, editReviewFormData })(EditReviewFormContainer);