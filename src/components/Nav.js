import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'


const NavBar = ({ currentUser, loggedIn }) => {

    return (
        <>
      <div><img className="top-logo" src= "/images/logo-banner.png" align="center"/>
      </div>
        <div className="NavBar"> 
            
             <h4><NavLink to="/rec_area_search">Discover</NavLink>
             <NavLink to="/reviews/new">Share</NavLink>
             <NavLink to="/explore">Explore</NavLink></h4>
             
             { loggedIn ? <> Welcome <NavLink to="/reviews"> {currentUser.attributes.name} </NavLink><Logout/></> : null }

        </div>
        </>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser

    }
}
   

export default connect(mapStateToProps)(NavBar)