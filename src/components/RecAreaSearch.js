import React from 'react'
import { connect } from 'react-redux'
import { updateRecAreaForm } from "../actions/recAreaForm.js"
import { login } from "../actions/currentUser.js"

const RecAreaSearch = ({recAreaForm, updateRecArea, login }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...recAreaForm,
            [name]: value 
        }
        updateRecArea(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(recAreaForm)
    }

// Set hidden values on form for the activities and their numbers (ie "1, ")
// You can set a data type of "number" that has parameters, use this for review later

    return (
        <form onSubmit={handleSubmit}> 
            
            <input placeholder="activity1" value={recAreaForm.activity1} name="activity1" type="text" onChange={handleInputChange} />
            <input placeholder="activity2" value={recAreaForm.activity2} name="activity2" type="text" onChange={handleInputChange} />
            <input placeholder="activity3" value={recAreaForm.activity3} name="activity3" type="text" onChange={handleInputChange} />
            <input placeholder="activity4" value={recAreaForm.activity4} name="activity4" type="text" onChange={handleInputChange} />
            <input placeholder="activity5" value={recAreaForm.activity5} name="activity5" type="text" onChange={handleInputChange} />
            <input placeholder="stateCode1" value={recAreaForm.stateCode1} name="stateCode1" type="text" onChange={handleInputChange} />
            <input placeholder="stateCode2" value={recAreaForm.stateCode1} name="stateCode2" type="text" onChange={handleInputChange} />
            <input placeholder="stateCode3" value={recAreaForm.stateCode1} name="stateCode3" type="text" onChange={handleInputChange} />
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
       recAreaForm: state.recAreaForm
    }
}

export default connect(mapStateToProps, { updateRecArea, login })(RecAreaSearch)