import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import currentUser from './reducers/current_user.js'
import loginForm from './reducers/loginForm.js'
import userFavorites from './reducers/userFavorites.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  users: usersReducer,
  currentUser, 
  loginForm,
  userFavorites
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store