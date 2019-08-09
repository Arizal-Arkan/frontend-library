import axios from 'axios'

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('http://192.168.6.135:2001/category', null, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}
