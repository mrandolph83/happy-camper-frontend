import React from 'react';
import Login from './Login.js'
// import Login from './componenets/Login.js'
// import Signup from './componenets/Signup.js'
// Allows access to link methods for log in & signup
import { Link } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <p>"Adopt the pace of nature.{'\n'} Her secret is patience."</p> {'\n'} 
        <h3>-Ralph Waldo Emerson</h3>
        <span><Login/> <Link to="/signup"> MAKE AN ACCOUNT </Link> </span>
  
        </div>
);

export default Home