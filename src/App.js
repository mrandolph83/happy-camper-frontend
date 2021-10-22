import React from 'react';
import './App.css';
import NavBar from "./components/Nav.js"
import PathSelection from "./components/PathSelection.js"
import RecAreaSearch from "./components/RecAreaSearch.js"
import MyReviews from "./components/MyReviews.js"
import ReviewCard from "./components/ReviewCard.js"
import MyAccount from "./components/MyAccount.js"
import Logout from './components/Logout.js'
import Home from './components/Home.js'
import DiscoverResults from './components/DiscoverResults.js'
import RecAreaCard from './components/RecAreaCard.js'
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
    const { loggedIn, recAreas, reviews } = this.props
return (
  
<div className="Main-Container">
  <div className="App">
  
  <NavBar location={this.props.location}/> 
 <Switch>
 <Route exact path='/' render={(props)=> loggedIn ? <PathSelection/> : <Home/>}/>
 <Route exact path='/logout' component={Logout}/>
 <Route exact path='/rec_areas' component={DiscoverResults}/>
 <Route exact path='/reviews/new' component={NewReviewFormContainer}/>
 <Route exact path='/rec_area_search' component={RecAreaSearch}/>
 <Route exact path='/reviews' component={MyReviews}/>
 <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
 <Route exact path='/rec_areas/:id' render={props => {
    const recArea = recAreas.find(recArea => recArea.id === props.match.params.id)
    return <RecAreaCard recArea={recArea} {...props}/>  }}/>
 <Route exact path='/reviews/:id' render={props => {
    const review = reviews.find(review => review.id === props.match.params.id)
    return <ReviewCard review={review} {...props}/>  }}/>
<Route exact path='/reviews/:id/edit' render={props => {
    const review = reviews.find(review => review.id === props.match.params.id)
    return <EditReviewFormContainer review={review} {...props}/>
            }
          }/>
  
  </Switch>
 
 </div>
 </div>
  );
}
}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    reviews: state.myReviews,
    recAreas: state.recAreaQuery
    
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser, getMyReviews, editReviewFormData  })(App));
