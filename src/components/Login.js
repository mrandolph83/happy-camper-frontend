import React from 'react'
// Needed because this is a React component
import { connect } from 'react-redux'
// Allows for mapStateToProps
import { updateLoginForm } from "../actions/loginForm.js"
// The action that takes in this data 
import { login } from "../actions/currentUser.js"
// Gives access to login const variable, which is the fetch to the
// backend that authenticates the user and sets currentUser

const Login = ({loginForm, updateLoginForm, login }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value 
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleInputChange} />
            <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleInputChange} />
            <input type="submit" value="Log In"/>
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
       loginForm: state.loginForm
    }
}

// Sends this data from the form through these actions, allowing the state to 
// be updated
export default connect(mapStateToProps, { updateLoginForm, login })(Login)