import axios from 'axios'

export const getAllReplys = () => {
  return {
    type: 'GET_ALL_REPLYS',
    payload: axios.get('http://localhost:5000/reply')
  }
}

export const deleteReply = (id) => {
  console.log('theDelete', id)
  return {
    type: 'DELETE_REPLY',
    payload: axios.post(`http://localhost:5000/reply/delete/${id}`)
  }
}

export const addTime = (time) => {
  console.log('Time')
  return {
    type: "ADD_TIME",
    payload: axios.post(`http://localhost:5000/reply/time/${time}`)
  }
}
