import React from 'react';
// import Login from './componenets/Login.js'
// import Signup from './componenets/Signup.js'
// Allows access to link methods for log in & signup
import { Link } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <span>Welcome, please <Link to="/login">log In</Link> or <Link to="/signup"> sign Up </Link> </span>
  
        </div>
);

export default Home