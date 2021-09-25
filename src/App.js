import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import MainContainer from "./components/MainContainer.js"
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from "react-redux"
 
class App extends React.Component  {
  
componentDidMount() {

  this.props.getCurrentUser()
}

  render() {
return (
  <div className="App">
 <NavBar/> 
 <MainContainer/>
 </div>
  );
}
}


export default connect(null, { getCurrentUser })(App);
