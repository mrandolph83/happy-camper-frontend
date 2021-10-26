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

return (
    
    <div>
    <p><img className="top-banner" src="../images/top-banner-discover.png" alt="Discover an Experience" align="left" /></p>
        
    
    <form onSubmit={event => {
  event.preventDefault() 
   handleSubmit(recAreaFormData, user_id)}}>
       <h2>Search by Activity and/or State:</h2>
        <label> ACTIVITY: </label>
        <select name="activity1" id="activity-select" onChange={handleInputChange} value={recAreaFormData.activity1}>
            <option value="">--SELECT AN ACTIVIVITY--</option>
            <option value="BIKING">BIKING</option>
            <option value="BOATING">BOATING</option>
            <option value="CLIMBING">CLIMBING</option>
            <option value="HISTORIC/CULTURAL SITE">HISTORIC/CULTURAL SITE</option>
            <option value="CAMPING">CAMPING</option>
            <option value="FISHING">FISHING</option>
            <option value="HIKING">HIKING</option>
            <option value="HORSEBACK RIDING">HORSEBACK RIDING</option>
            <option value="HUNTING">HUNTING</option>
            <option value="WINTER SPORTS">WINTER SPORTS</option>
            <option value="RECREATIONAL VEHICLES">RECREATIONAL VEHICLES</option>
            <option value="SWIMMING">SWIMMING</option>
            <option value="KAYAKING">KAYAKING</option>
            <option value="CANOEING">CANOEING</option>
            <option value="BEACH CAMPING">BEACH CAMPING</option>
            <option value="SNOWMOBILE">SNOWMOBILE</option>
            <option value="OFF ROAD VEHICLE TRAILS">OFF ROAD VEHICLE TRAILS</option>
            <option value="SURFING">SURFING</option>
            <option value="WHITEWATER RAFTING">WHITEWATER RAFTING</option>
            <option value="BACKPACKING">BACKPACKING</option>
            <option value="SAILING">SAILING</option>
            <option value="SCUBA DIVING">SCUBA DIVING</option>
            <option value="CAVING">CAVING</option>
        </select>
  

        <label> STATE: </label>
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

        <h3>or</h3>

        <h2>Search By Name:</h2>
  
        <h3><input placeholder="keywords" value={recAreaFormData.keywords} name="keywords" type="text" onChange={handleInputChange} /></h3>
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