import React from 'react';
import { updateNewReviewForm } from '../actions/newReview.js'
import { createReview } from '../actions/newReview.js'
import { connect } from 'react-redux'

// Should be receiving props of current_user id, location_id


// 
// Destructuring, look at making form video again. Took a still with notes on it 
const NewReviewForm = ({newReviewData, updateNewReviewForm, createReview}) => {

   // const {user_id, rec_area_id, description, date, picture, nature_review, amenities_review, activities_review, family_review} = formData

   const handleChange = event => {
      const { name, value } = event.target
      updateNewReviewForm(name, value)
   }

const handleSubmit = event => {
   event.preventDefault();
   createReview(newReviewData)
}



return ( 
<form onSubmit={handleSubmit}>

{/* <input
placeholder="user_id"
name="user_id"
onChange={handleChange}
value={user_id}
/> */}

<input
placeholder="user_id"
name="user_id"
onChange={handleChange}
value={newReviewData.user_id}
/>

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

<input type="submit" value="Create Review"/>

</form>
)};

const mapStateToProps = state => {
   
   return {
      newReviewData: state.newReview
}
}


export default connect(mapStateToProps, { updateNewReviewForm, createReview })(NewReviewForm)



