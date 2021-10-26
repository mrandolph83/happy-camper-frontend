import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({ currentUser, loggedIn }) => {

    return (

        <>
        <div><Link to="/"><img className="top-logo" src= "/images/logo-banner.png" align="center" alt="Top logo, camping theme"/></Link>
        </div>
        <div className="NavBar" style={{color: "white"}}>    
             <h4><NavLink to="/rec_area_search">|  Discover  |</NavLink>
             <NavLink to="/reviews">My Reviews  |</NavLink>
             </h4>  
             { loggedIn ? <> Welcome <NavLink to="/reviews"> {currentUser.attributes.name} </NavLink>    <Logout/></> : null }
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