import axios from 'axios'

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('http://192.168.6.138:2001/category')
  }
}
