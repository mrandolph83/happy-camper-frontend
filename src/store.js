import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// store takes data from the reducers,
import usersReducer from './reducers/users.js'
import currentUser from './reducers/current_user.js'
import recAreaForm from './reducers/recAreaForm.js'
import loginForm from './reducers/loginForm.js'
import userFavorites from './reducers/userFavorites.js'
import recAreaQuery from './reducers/recAreaQuery.js'
import newReview from './reducers/newReview.js'
import signupForm from './reducers/signupForm.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  users: usersReducer,
  currentUser, 
  loginForm,
  userFavorites,
  newReview,
  recAreaForm,
  recAreaQuery,
  signupForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store