import React from 'react'
import { connect } from 'react-redux'


const NavBar = ({ currentUser }) => {

    return (
        <div className="nav"> 
      
             { currentUser ? `Welcome ${currentUser.attributes.name}` : ""}
           
            <button>Log In</button>
            or 
            <button>Sign Up</button>
            {/* { currentUser ? <Logout/> : <Login/> } */}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser 
    }
}
   

export default connect(mapStateToProps)(NavBar)