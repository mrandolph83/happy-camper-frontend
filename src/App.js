import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import PathSelection from "./components/PathSelection.js"
import DiscoverContainer from "./components/DiscoverContainer.js"
import MyReviews from "./components/MyReviews.js"
import ReviewCard from "./components/ReviewCard.js"
import MyAccount from "./components/MyAccount.js"
import Logout from './components/Logout.js'
import Home from './components/Home.js'
import Signup from './components/Signup'
import NewReviewFormContainer from './components/ReviewFormContainerNew'
import EditReviewFormContainer from './components/ReviewFormContainerEdit'
import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from "./actions/currentUser.js"
import { getMyReviews } from "./actions/myReviews.js"
import { connect } from "react-redux"
import { editReviewFormData } from "./actions/reviewForm.js"

class App extends React.Component  {
  
componentDidMount() {

  this.props.getCurrentUser()
  this.props.getMyReviews()
}

  render() {
    const { loggedIn, reviews, editReviewFormData } = this.props
return (
  <div className="App">
  

  {/* location prop provided by withRouter */}
  <NavBar location={this.props.location}/> 
 <Switch>
  {/* With render you can be more specific with what props you are sending,
  with component it is the whole component and all props in the ecosystem */}
 {/* <Route exact path='/login' component={Login}/> */}
 <Route exact path='/' render={(props)=> loggedIn ? <PathSelection/> : <Home/>}/>
 <Route exact path='/logout' component={Logout}/>
 <Route exact path='/account' component={MyAccount}/>
 <Route exact path='/reviews/new' component={NewReviewFormContainer}/>
 <Route exact path='/discover' component={DiscoverContainer}/>
 <Route exact path='/reviews' component={MyReviews}/>
 <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
 
 <Route exact path='/reviews/:id' render={props => {
    const review = reviews.find(review => review.id === props.match.params.id)
    return <ReviewCard review={review} {...props}/>  }}/>
{/* PAsses review down to props. Use this method for userFavorites? */}
<Route exact path='/reviews/:id/edit' render={props => {
              // I need to get ???
              const review = reviews.find(review => review.id === props.match.params.id)
              // dispatch updateForm -> review
              return <EditReviewFormContainer review={review} {...props}/>
            }
          }/>
  
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


export default withRouter(connect(mapStateToProps, { getCurrentUser, getMyReviews, editReviewFormData  })(App));
