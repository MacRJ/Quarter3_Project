export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_REPLYS_FULFILLED':
      return [...action.payload.data]
    case 'DELETE_REPLY_FULFILLED':
      return [...action.payload.data]
    case 'DELETE_REPLY_REJECTED':
      return state
    default:
      return state

  }
}
