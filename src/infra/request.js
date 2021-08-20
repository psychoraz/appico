import axios from 'axios'

const API_URL = 'https://randomuser.me/api/'

const getRequest = async (howMany, fields) => {
  return await axios.get(`${API_URL}?results=${howMany}&inc=${fields.join(',')}`)
}

export default {
  getRequest
}