import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import RecAreaSearch from "./components/RecAreaSearch.js"
import MainContainer from "./components/MainContainer.js";
import PathSelection from "./components/PathSelection.js"
import MyReviews from "./components/MyReviews.js"
import ReviewCard from "./components/ReviewCard.js"
import MyAccount from "./components/MyAccount.js"
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Home from './components/Home.js'
import Signup from './components/Signup'
import NewReviewFormContainer from './components/ReviewFormContainerNew'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from "react-redux"
import { editReviewFormData } from "./actions/reviewForm.js"

class App extends React.Component  {
  
componentDidMount() {

  this.props.getCurrentUser()
}

  render() {
    const { loggedIn, reviews } = this.props
return (
  <div className="App">
  

  {/* location prop provided by withRouter */}
  <NavBar location={this.props.location}/> 
  { loggedIn ? null : <Link to='/login'>Login</Link>}
 <Switch>
  {/* With render you can be more specific with what props you are sending,
  with component it is the whole component and all props in the ecosystem */}
 <Route exact path='/login' component={Login}/>
 <Route exact path='/logout' component={Logout}/>
 <Route exact path='/account' component={MyAccount}/>
 <Route exact path='/reviews' component={MyReviews}/>
 <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
  <Route exact path='/' render={(props)=> loggedIn ? <PathSelection/> : <Home/>}/>
  <Route exact path='reviews/:id/edit' render={props => {
    const review = reviews.find(review => review.id === props.match.params.id)
  console.log(review)
  return <ReviewCard review={review} {...props}/>
  }}/>
  <Route exact path='/reviews/new' component={NewReviewFormContainer}/>
  </Switch>

  {/* Add LocationReviews as a component */}
  {/* Add UserFavorites as a Component */}
  {/* Add RecAreaResults as a Component */}
  {/* Add ExploreForm as a Component */}
  {/* Add ExploreResuts as a Component */}
  {/* Add DiscoverContainer as a Component (dumb, structure flexbox) */}
  {/* Add ShareContainer as a Component (dumb, structure flexbox) */}
  {/* Add ExploreContainer as a Component (dumc, structure flexbox) */}

 

 
{/* <MainContainer/>
//  <RecAreaSearch/> */}
 
 </div>
  );
}
}
const mapStateToProps = state => {
// Data is destructured, what exactly does this mean?
  return ({
    loggedIn: !!state.currentUser,
    reviews: state.myReviews
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser, editReviewFormData  })(App));
