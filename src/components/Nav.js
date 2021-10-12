import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Logout from './Logout.js'


const NavBar = ({ currentUser, loggedIn }) => {

    return (
        <div className="NavBar"> 
            
             <NavLink to="/rec_area_search">Discover</NavLink>
             <NavLink to="/reviews/new">Share</NavLink>
             <NavLink to="/explore">Explore</NavLink>
             { loggedIn ? <Logout/> : null }

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser

    }
}
   

export default connect(mapStateToProps)(NavBar)