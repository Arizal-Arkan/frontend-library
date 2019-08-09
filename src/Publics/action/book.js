import axios from 'axios'

export const getBook = (keyword) => {
  return {
    type: 'GET_BOOKS',
    payload: axios.get(`https://library-apii.herokuapp.com/book/?search=${keyword}`, null, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const postBook = (data) => {
  return {
    type: 'POST_BOOK',
    payload: axios.post(`https://library-apii.herokuapp.com/book`, data, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const deleteBook = (id) => {
  return {
    type: 'DELETE_BOOK',
    payload: axios.delete(`https://library-apii.herokuapp.com/book/${id}`, null, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const patchBook = (data,id,category) => {
  return {
    type: 'PATCH_BOOK',
    payload: axios.patch(`https://library-apii.herokuapp.com/book/${id}`, {...data,category:category}, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}

export const getBookById = (id) => {
  console.log(id)
  return {
    type: 'GET_BOOKS_ID',
    payload: axios.get(`https://library-apii.herokuapp.com/book/${id}`, null, {
      headers: {
        'authorization': 'Allow'
      }
    })
  }
}


