import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"

const NavBar = ({ currentUser }) => {

    return (
        <div> 
             { currentUser ? `Welcome ${currentUser.name}` : "" }
            { currentUser ? <Logout/> : <Login/> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser 
    }
}
   

export default connect(mapStateToProps)(NavBar)