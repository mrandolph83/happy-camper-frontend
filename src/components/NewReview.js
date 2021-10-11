import React from 'react';
import { updateNewReviewForm } from '../actions/newReview.js'
import { connect } from 'react-redux'

// Should be receiving props of current_user id, location_id


// 

const NewReviewForm = ({user_id, rec_area_id, description, picture, nature_review, amenities_review, actitivities_review, family_review}) => {
   const handleChange = event => {
      const { name, value } = event.target
      updateNewReviewForm(name, value)
   }

const handleSubmit = event => event.preventDefault(); {

}

return ( 
<form onSubmit={handleSubmit}>

<input
name="user_id"
onChange={handleChange}
value={""}
/>

<input
name="rec_area_id"
onChange={handleChange}
value={""}
/>

<input
name="description"
onChange={handleChange}
value={""}
/>

<input
name="picture"
onChange={handleChange}
value={""}
/>

<input
name="nature_review"
onChange={handleChange}
value={""}
/>

<input
name="amenities_review"
onChange={handleChange}
value={""}
/>

<input
name="activities_review"
onChange={handleChange}
value={""}
/>

<input
name="family_review"
onChange={handleChange}
value={""}
/>

<input type="submit" value="Create Review"/>

</form>
)};

const mapStateToProps = state => {
   const {user_id, rec_area_id, description, picture, nature_review, amenities_review, actitivities_review, family_review} = state.newReview
   return {user_id, rec_area_id, description, picture, nature_review, amenities_review, actitivities_review, family_review}
}


export default connect(mapStateToProps, {updateNewReviewForm})(NewReviewForm)



// t.integer "user_id"
// This is current_user, also a part of state

// t.integer "rec_area_id"
//Should be sent through as props when clicking on "Review this "

