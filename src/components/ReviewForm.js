import React from 'react';
import { updateReviewForm } from '../actions/newReview.js'
import { createReview } from '../actions/newReview.js'
import { connect } from 'react-redux'

// Should be receiving props of current_user id, location_id


// 
// Destructuring, look at making form video again. Took a still with notes on it 
const ReviewFormForm = ({newReviewData, updateReviewForm, history, user_id, createReview}) => {

   // const {user_id, rec_area_id, description, date, picture, nature_review, amenities_review, activities_review, family_review} = formData

   const handleChange = event => {
      const { name, value } = event.target
      updateReviewForm(name, value)
   }

const handleSubmit = event => {
   event.preventDefault();
   createReview(
      {...newReviewData, user_id}, history)
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

<input type="submit" value="Create Review"/>

</form>
)};

const mapStateToProps = state => {
   const user_id = state.currentUser ? state.currentUser.id : ""
   return {
      newReviewData: state.newReview,
      user_id
}
}


export default connect(mapStateToProps, { updateReviewForm, createReview })(ReviewFormForm)



