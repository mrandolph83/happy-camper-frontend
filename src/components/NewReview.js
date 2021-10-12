import React from 'react';
import { updateNewReviewForm } from '../actions/newReview.js'
import { createReview } from '../actions/newReview.js'
import { connect } from 'react-redux'

// Should be receiving props of current_user id, location_id


// 
// Destructuring, look at making form video again. Took a still with notes on it 
const NewReviewForm = ({user_id, rec_area_id, description, picture, nature_review, amenities_review, activities_review, family_review, history, updateNewReviewForm, createReview}) => {

   // const {user_id, rec_area_id, description, date, picture, nature_review, amenities_review, activities_review, family_review} = formData

   const handleChange = event => {
      const { name, value } = event.target
      updateNewReviewForm(name, value)
   }

const handleSubmit = event => {
   event.preventDefault();
   createReview(user_id, rec_area_id, description, picture, nature_review, amenities_review, activities_review, family_review)
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
value={rec_area_id}
/>

<input
placeholder="description"
name="description"
onChange={handleChange}
value={description}
/>

<input
placeholder="picture"
name="picture"
onChange={handleChange}
value={picture}
/>

<input
placeholder="nature_review"
name="nature_review"
onChange={handleChange}
value={nature_review}
/>

<input
placeholder="amenities_review"
name="amenities_review"
onChange={handleChange}
value={amenities_review}
/>

<input
placeholder="activities_review"
name="activities_review"
onChange={handleChange}
value={activities_review}
/>

<input

name="family_review"
onChange={handleChange}
value={family_review}
/>

<input type="submit" value="Create Review"/>

</form>
)};

const mapStateToProps = state => {
   const {user_id, rec_area_id, description, picture, nature_review, amenities_review, actitivities_review, family_review} = state.newReview
   return {user_id, rec_area_id, description, picture, nature_review, amenities_review, actitivities_review, family_review, user_id: state.currentUser.id}
}


export default connect(mapStateToProps, {updateNewReviewForm, createReview})(NewReviewForm)



// t.integer "user_id"
// This is current_user, also a part of state

// t.integer "rec_area_id"
//Should be sent through as props when clicking on "Review this "

