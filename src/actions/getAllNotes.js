import axios from 'axios'

export const getAllNotes = () => {
  return {
    type: 'GET_ALL_NOTES',
    payload: axios.get('http://localhost:5000/notes/')
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    payload: axios.post(`http://localhost:5000/notes/delete/${id}`)
  }
}
