import React from 'react';
import { updateNewReviewForm } from '../actions/newReview.js'

// Should be receiving props of current_user id, location_id

const NewReviewForm = () => {
   const handleChange = event => {
      const { name, value } = event.target
      updateNewReviewForm(name, value)
   }

return ( 
<form>

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

</form>
)};

export default NewReviewForm



// t.integer "user_id"
// This is current_user, also a part of state

// t.integer "rec_area_id"
//Should be sent through as props when clicking on "Review this "

