import React from 'react'
// Needed because this is a React component
import { connect } from 'react-redux'
// Allows for mapStateToProps
import { updateSignupForm } from "../actions/signupForm.js"
// The action that takes in this data 
import { signup } from "../actions/currentUser.js"
// Gives access to login const variable, which is the fetch to the
// backend that authenticates the user and sets currentUser

const Signup = ({signupForm, updateSignupForm, signup }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupForm,
            [name]: value 
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupForm)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input placeholder="name" value={signupForm.name} name="name" type="text" onChange={handleInputChange} />
            <input placeholder="username" value={signupForm.username} name="username" type="text" onChange={handleInputChange} />
            <input placeholder="password" value={signupForm.password} name="password" type="text" onChange={handleInputChange} />
            <input type="submit" value="Sign Up"/>
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
       signupForm: state.signupForm
    }
}

// Sends this data from the form through these actions, allowing the state to 
// be updated
export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
