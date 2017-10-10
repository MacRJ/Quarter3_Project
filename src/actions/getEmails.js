import axios from 'axios'

export const getAllEmails = () => {
  return {
    type: 'GET_ALL_EMAILS',
    payload: axios.get('http://localhost:5000/emails')
  }
}
