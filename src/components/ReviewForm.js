import React from 'react';
import { updateReviewForm } from '../actions/reviewForm.js'
import { connect } from 'react-redux'




const ReviewForm = ({newReviewData, updateReviewForm, user_id, history, rec_area_id, handleSubmit, editMode}) => {   

const handleChange = event => {
      const { name, value } = event.target
      
      updateReviewForm(name, value)
   }

return ( 

    

<form onSubmit={event => {
  event.preventDefault() 

   handleSubmit(newReviewData, user_id, rec_area_id)}}>

{/* 
   <input
   placeholder="rec_area_id"
   type="hidden"
   name="rec_area_id"
   onChange={handleChange}

value={rec_id} 
/> */}
<h3 className="review-form-question">How would you describe your experience overall?</h3>
<p><textarea
placeholder="description"
rows="4" 
cols="75"
name="description"
onChange={handleChange}
value={newReviewData.description}
/></p>

{/* Leaving set up for future integration of pictures */}
<input
placeholder="picture"
type="hidden"
name="picture"
onChange={handleChange}
value=" "
/>

{/* Leaving set up for future integration of date  */}

<input
placeholder="date"
type="hidden"
name="date"
onChange={handleChange}
value= " "
/>

<h3 className="review-form-question">On a scale of 1-5, please rate the following:</h3>
<h3></h3>

<p className="review-form-sub-question">The beauty and/or distinctiveness of natural elements:</p>

<select name="nature_review" id="rating-select" onChange={handleChange} value={newReviewData.nature_review}>
            <option value="">-- SELECT RATING --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <h3></h3>

<p className="review-form-sub-question">Quality of amenities provided (if applicable):</p>
<select name="amenities_review" id="rating-select" onChange={handleChange} value={newReviewData.amenities_review}>
            <option value="">-- SELECT RATING --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <h3></h3>

<p className="review-form-sub-question">Breadth and/or quality of activities available:</p>

<select name="activities_review" id="rating-select" onChange={handleChange} value={newReviewData.activities_review}>
            <option value="">-- SELECT RATING --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <h3></h3>

<p className="review-form-sub-question">Quality of activities and/or ease of access for families with small children:</p>
<select name="family_review" id="rating-select" onChange={handleChange} value={newReviewData.family_review}>
            <option value="">-- SELECT RATING --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <h3></h3>

<input type="submit" value={editMode ? "Update Review" : "Create Review"}/>

</form>







)};



const mapStateToProps = state => {
   const user_id = state.currentUser ? state.currentUser.id : ""
   return {
      newReviewData: state.reviewForm,
      myReviews: state.myReviews,
      user_id,
}
}


export default connect(mapStateToProps, { updateReviewForm })(ReviewForm)



