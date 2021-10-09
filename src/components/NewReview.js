import React from 'react';

// Should be receiving props of current_user id, location_id

const NewReviewForm = () => {
   const handleChange=() => {}

return ( 
<form>

<input
name="user_id"
onChange={handleChange}
value={"uid"}
/>

<input
name="rec_area_id"
onChange={handleChange}
value={"rid"}
/>

<input
name="description"
onChange={handleChange}
value={"description"}
/>

<input
name="picture"
onChange={handleChange}
value={"picture"}
/>

<input
name="nature_review"
onChange={handleChange}
value={"nature_review"}
/>

<input
name="amenities_review"
onChange={handleChange}
value={"amenities_review"}
/>

<input
name="activities_review"
onChange={handleChange}
value={"activities_review"}
/>

<input
name="family_review"
onChange={handleChange}
value={"family_review"}
/>

</form>
)};

export default NewReviewForm



// t.integer "user_id"
// This is current_user, also a part of state

// t.integer "rec_area_id"
//Should be sent through as props when clicking on "Review this "

