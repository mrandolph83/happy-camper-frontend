import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from "react-redux"
 
class App extends React.Component  {
  
componentDidMount() {

  this.props.getCurrentUser()
}

  render() {
return (
 <NavBar/> 
  );
}
}


export default connect(null, { getCurrentUser })(App);
