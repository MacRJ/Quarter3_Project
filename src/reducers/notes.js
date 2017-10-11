export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_NOTES_FULFILLED':
      return [...action.payload.data]
    default:
      return state

  }
}
