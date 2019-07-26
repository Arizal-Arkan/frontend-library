import axios from 'axios'

export const postBorrow = (data) => {
  return {
    type: 'POST_BORROW',
    payload: axios.post(`http://192.168.6.138:2001/borrow`, data)
  }
}

export const getBorrow = () => {
  return {
    type: 'GET_BORROW',
    payload: axios.get(`http://192.168.6.138:2001/borrow`)
  }
}

export const updateBorrow = (id, data) => {
  console.log(id)
  return {
    type: 'PATCH_BORROW',
    payload: axios.patch(`http://192.168.6.138:2001/borrow/${id}`, { penalty: data })
  }
}
