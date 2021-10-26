import React from 'react';
import Login from './Login.js'
import { Link } from 'react-router-dom'

const Home = () => (

    <div>
        <img className="home-fire" src="../images/fire.gif" />
        <div className="login-elements"> <h3>"Adopt the pace of nature.{'\n'} Her secret is patience."</h3> {'\n'} 
        <h3>-Ralph Waldo Emerson-</h3>
        <span><Login/> <Link to="/signup"> MAKE AN ACCOUNT </Link> </span>
        </div>
        </div>
);

export default Home