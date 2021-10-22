import React from 'react';
import { updateReviewForm } from '../actions/reviewForm.js'
import { connect } from 'react-redux'


const ReviewForm = ({newReviewData, updateReviewForm, user_id, handleSubmit, editMode}) => {


   

   const handleChange = event => {
      const { name, value } = event.target
      
      updateReviewForm(name, value)
   }

return ( 

 
<form onSubmit={event => {
  event.preventDefault() 
  
  
   console.log("here we are!")
   handleSubmit(newReviewData, user_id)}}>


   <input
   placeholder="rec_area_id"
   name="rec_area_id"
   onChange={handleChange}

value={newReviewData.rec_area_id} 
/>

<input
placeholder="description"
name="description"
onChange={handleChange}
value={newReviewData.description}
/>

<input
placeholder="picture"
name="picture"
onChange={handleChange}
value={newReviewData.picture}
/>

{/* Make a selector for month/year if possible. Can I do format like 01-2020 for date datatype? */}

<input
placeholder="date"
name="date"
onChange={handleChange}
value={newReviewData.date}
/>

<input
placeholder="nature_review"
name="nature_review"
onChange={handleChange}
value={newReviewData.nature_review}
/>

<input
placeholder="amenities_review"
name="amenities_review"
onChange={handleChange}
value={newReviewData.amenities_review}
/>

<input
placeholder="activities_review"
name="activities_review"
onChange={handleChange}
value={newReviewData.activities_review}
/>

<input
placeholder="family_review"
name="family_review"
onChange={handleChange}
value={newReviewData.family_review}
/>

<input type="submit" value={editMode ? "Update Review" : "Create Review"}/>

</form>







)};



const mapStateToProps = state => {
   const user_id = state.currentUser ? state.currentUser.id : ""
   return {
      newReviewData: state.reviewForm,
      myReviews: state.myReviews,
      user_id
}
}


export default connect(mapStateToProps, { updateReviewForm })(ReviewForm)



