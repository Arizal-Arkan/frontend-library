import axios from 'axios'

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: axios.get(`http://192.168.6.138:2001/book`,
      {
        headers: {
          'authorization': 'allowedAccses'
        }
      })
  }
}

export const postBook = (data) => {
  return {
    type: 'POST_BOOK',
    payload: axios.post(`http://192.168.6.138:2001/book`, data)
  }
}

export const deleteBook = (id) => {
  return {
    type: 'DELETE_BOOK',
    payload: axios.delete(`http://192.168.6.138:2001/book/${id}`)
  }
}

export const editBook = (id) => {
  return {
    type: 'EDIT_BOOK',
    payload: axios.patch(`http://192.168.6.138:2001/book/${id}`)
  }
}

export const getBookById = (id) => {
  console.log(id)
  return {
    type: 'GET_BOOK_ID',
    payload: axios.get(`http://192.168.6.138:2001/book/${id}`)
  }
}
