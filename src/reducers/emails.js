export default(state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_EMAILS_FULFILLED':
      return [...action.payload.data]
    case 'CLICKED_FULFILLED':
      return [...action.payload.data]
    default:
      return state

  }
}
