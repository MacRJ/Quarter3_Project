import axios from 'axios'

export const getAllEmails = () => {
  return {
    type: 'GET_ALL_EMAILS',
    payload: axios.get('http://localhost:5000/emails')
  }
}

export const clicked = (id) => {

  return {
    type: 'CLICKED',
    payload: axios.post(`http://localhost:5000/emails/clicked/${id}`)
  }
}

export const selected = (id) => {
  return {
    type: "SELECTED",
    payload: axios.post(`http://localhost:5000/emails/selected/${id}`)
  }
}
