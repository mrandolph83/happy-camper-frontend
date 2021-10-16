const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_REVIEWS":
      return action.reviews
    case "ADD_REVIEW":
      return state.concat(action.review)
    case "UPDATE_REVIEW_IN_STORE":
      return state.map(review => review.id === action.review.id ? action.review : review)
      case "DELETE_REVIEW_IN_STORE":
        return state.filter(review => review.id === action.reviewId ? false : true)
      case "CLEAR_REVIEWS":
      return initialState
    default:
      return state
  }
}