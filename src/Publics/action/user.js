import axios from 'axios'

export const getUsers = (token, idUser) => {
  return {
    type: 'GET_USERS',
    payload: axios.get(`http://192.168.6.135:2001/user`, null, {
      headers: {
        'x-access-token': `bearer ${token}`,
        'authorization': 'Allow',
        'x-control-user': idUser
      }
    })
  }
}

export const getByEmail = (data) => {
  return {
    type: 'GET_BY_EMAIL',
    payload: axios.post(`http://192.168.6.135:2001/user/login`, data, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`http://192.168.6.135:2001/user/register`, data, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const getToken = (token, idUser) => {
  return {
    type: 'GET_TOKEN',
    payload: axios.post(`http://192.168.6.135:2001/user/getToken`, null, {
      headers: {
        'x-access-token': `bearer ${token}`,
        'authorization': 'Allow',
        'x-control-user': idUser
      }
    })
  }
}
