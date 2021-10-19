import React from 'react'
import { connect } from 'react-redux'
import { updateRecAreaForm } from "../actions/recAreaForm.js"
import { recAreaUserSearch } from "../actions/recAreaQuery.js"
import DiscoverResults from "./DiscoverResults.js"

const RecAreaSearch = ({recAreaFormData, updateRecAreaForm, history, user_id, recAreaUserSearch}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...recAreaFormData,
            [name]: value 
        }
        updateRecAreaForm(updatedFormInfo)
    }

    const handleSubmit = (recAreaFormData, user_id) => {
        console.log(user_id)
        recAreaUserSearch(recAreaFormData, history, user_id)
    }

// Set hidden values on form for the activities and their numbers (ie "1, ")
// You can set a data type of "number" that has parameters, use this for review later

return (
    
    <div>
    <img className="top-banner" src="../images/top-banner-discover.png" />
        
    
    <form onSubmit={event => {
  event.preventDefault() 
   handleSubmit(recAreaFormData, user_id)}}>
    
        
        {/* <input placeholder="activity1" value={recAreaFormData.activity1} name="activity1" type="text" onChange={handleInputChange} /> */}
        <label> Choose an activity: </label>
        <select name="activity1" id="activity-select" onChange={handleInputChange} value={recAreaFormData.activity1}>
            <option value="">--SELECT AN ACTIVIVITY--</option>
            <option value="5">BIKING</option>
            <option value="6">BOATING</option>
            <option value="7">CLIMBING</option>
            <option value="8">HISTORIC/CULTURAL SITE</option>
            <option value="9">CAMPING</option>
            <option value="11">FISHING</option>
            <option value="14">HIKING</option>
            <option value="15">HORSEBACK RIDING</option>
            <option value="16">HUNTING</option>
            <option value="22">WINTER SPORTS</option>
            <option value="23">RECREATIONAL VEHICLES</option>
            <option value="106">SWIMMING</option>
            <option value="100007">KAYAKING</option>
            <option value="100008">CANOEING</option>
            <option value="100010">BEACH CAMPING</option>
            <option value="100001">SNOWMOBILE</option>
            <option value="100003">OFF ROAD VEHICLE TRAILS</option>
            <option value="100016">SURFING</option>
            <option value="100034">WHITEWATER RAFTING</option>
            <option value="100036">BACKPACKING</option>
            <option value="100037">SAILING</option>
            <option value="100038">SCUBA DIVING</option>
            <option value="100080">CAVING</option>
        </select>
  

        <label> Choose a State: </label>
        <select name="stateCode1" id="state-select" onChange={handleInputChange} value={recAreaFormData.stateCode1}>
            <option value="">--SELECT A STATE--</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
  
        <input placeholder="keywords" value={recAreaFormData.keywords} name="keywords" type="text" onChange={handleInputChange} />
        <input type="submit" value="Search Rec Areas"/>
    </form>
    <DiscoverResults user_id/>
    </div>
    )
}

const mapStateToProps = state => {
    return {
       recAreaFormData: state.recAreaForm,
       user_id: state.currentUser
    }
}

export default connect(mapStateToProps, { updateRecAreaForm, recAreaUserSearch })(RecAreaSearch)