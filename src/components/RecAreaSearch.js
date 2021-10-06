import React from 'react'
import { connect } from 'react-redux'
import { updateRecAreaForm } from "../actions/recAreaForm.js"
import { recAreaUserSearch } from "../actions/recAreaQuery.js"

const RecAreaSearch = ({recAreaFormData, updateRecAreaForm}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...recAreaFormData,
            [name]: value 
        }
        updateRecAreaForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()  
        recAreaUserSearch(recAreaFormData)
    }

// Set hidden values on form for the activities and their numbers (ie "1, ")
// You can set a data type of "number" that has parameters, use this for review later

return (
    <form onSubmit={handleSubmit}> 
        
        <input placeholder="activity1" value={recAreaFormData.activity1} name="activity1" type="text" onChange={handleInputChange} />
        {/* <input placeholder="activity2" value={recAreaFormData.activity2} name="activity2" type="text" onChange={handleInputChange} />
        <input placeholder="activity3" value={recAreaFormData.activity3} name="activity3" type="text" onChange={handleInputChange} />
        <input placeholder="activity4" value={recAreaFormData.activity4} name="activity4" type="text" onChange={handleInputChange} />
        <input placeholder="activity5" value={recAreaFormData.activity5} name="activity5" type="text" onChange={handleInputChange} /> */}
        <input placeholder="stateCode1" value={recAreaFormData.stateCode1} name="stateCode1" type="text" onChange={handleInputChange} />
        {/* <input placeholder="stateCode2" value={recAreaFormData.stateCode2} name="stateCode2" type="text" onChange={handleInputChange} />
        <input placeholder="stateCode3" value={recAreaFormData.stateCode3} name="stateCode3" type="text" onChange={handleInputChange} /> */}
        <input placeholder="keywords" value={recAreaFormData.keywords} name="keywords" type="text" onChange={handleInputChange} />
        <input type="submit" value="Search Rec Areas"/>
    </form>
    )
}

// Turns the state into props within this component. Sructured
// like: {
//     username: mrandolph83
//     password: password
// }

const mapStateToProps = state => {
    return {
       recAreaFormData: state.recAreaForm
    }
}

export default connect(mapStateToProps, { updateRecAreaForm, recAreaUserSearch })(RecAreaSearch)