import axios from 'axios'

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('https://library-apii.herokuapp.com/category', null, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}
