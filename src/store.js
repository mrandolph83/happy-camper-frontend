import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// store takes data from the reducers,
import currentUser from './reducers/current_user.js'
import recAreaForm from './reducers/recAreaForm.js'
import loginForm from './reducers/loginForm.js'
import userFavorite from './reducers/userFavorite.js'
import recAreaQuery from './reducers/recAreaQuery.js'
import reviewRecData from './reducers/reviewRecData.js'
import reviewForm from './reducers/reviewForm.js'
import signupForm from './reducers/signupForm.js'
import myReviews from './reducers/myReviews'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  currentUser, 
  loginForm,
  userFavorite,
  reviewForm,
  reviewRecData,
  myReviews,
  recAreaForm,
  recAreaQuery,
  signupForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store