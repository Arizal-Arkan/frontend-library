import axios from 'axios'

export const getUsers = (token, idUser) => {
  return {
    type: 'GET_USERS',
    payload: axios.get(`https://library-apii.herokuapp.com/user`, null, {
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
    payload: axios.post(`https://library-apii.herokuapp.com/user/login`, data, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`https://library-apii.herokuapp.com/user/register`, data, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const getToken = (token, idUser) => {
  return {
    type: 'GET_TOKEN',
    payload: axios.post(`https://library-apii.herokuapp.com/user/getToken`, null, {
      headers: {
        'x-access-token': `bearer ${token}`,
        'authorization': 'Allow',
        'x-control-user': idUser
      }
    })
  }
}
