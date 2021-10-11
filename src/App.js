import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import RecAreaSearch from "./components/RecAreaSearch.js"
import MainContainer from "./components/MainContainer.js";
import PathSelection from "./components/PathSelection.js"
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Home from './components/Home.js'
import Signup from './components/Signup'
import NewReview from './components/NewReview.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from "react-redux"

class App extends React.Component  {
  
componentDidMount() {

  this.props.getCurrentUser()
}

  render() {
    const { loggedIn } = this.props
return (
  <div className="App">
  {/* <NavBar/>  */}
  
{ loggedIn? <Logout/> : null}
 
  {/* With render you can be more specific with what props you are sending,
  with component it is the whole component and all props in the ecosystem */}
 <Route exact path='/login' component={Login}/>
 <Route exact path='/signup' component={Signup}/>
  <Route exact path='/' render={(props)=> loggedIn ? <PathSelection/> : <Home/>}/>
  <Route exact path='/review/new' component={NewReview}/>
  
 

 
{/* <MainContainer/>
//  <RecAreaSearch/> */}
 
 </div>
  );
}
}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
