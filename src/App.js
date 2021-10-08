import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import RecAreaSearch from "./components/RecAreaSearch.js"
import MainContainer from "./components/MainContainer.js"
import Login from './components/Login.js'
import Logout from './components/Logout'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from "react-redux"

class App extends React.Component  {
  
componentDidMount() {

  this.props.getCurrentUser()
}

  render() {
return (
  <div className="App">
   <Logout/> 
  <Router> 
 <NavBar/> 

 <Route exact path='/login' component={Login}/>
 <Route exact path='/signup' component={Signup}/>
 </Router>
//  {/* <MainContainer/>
//  <RecAreaSearch/> */}
 
 </div>
  );
}
}


export default connect(null, { getCurrentUser })(App);
