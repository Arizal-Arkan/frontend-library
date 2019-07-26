import axios from 'axios'

export const getUser = () => {
  return {
    type: 'GET_USERS',
    payload: axios.get(`http://192.168.6.136:2001/user`)
  }
}

export const getByEmail = (data) => {
  return {
    type: 'GET_BY_EMAIL',
    payload: axios.post(`http://192.168.6.136:2001/user/login`, data)
  }
}

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`http://192.168.6.136:2001/user/register`, data)
  }
}
