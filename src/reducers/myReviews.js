const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_REVIEWS":
      return action.reviews
    case "ADD_REVIEW":
      return state.concat(action.review)
    case "CLEAR_REVIEWS":
      return initialState
    default:
      return state
  }
}