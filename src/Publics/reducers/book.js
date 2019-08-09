const initialState = {
  bookList: [],
  bookEdit: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
}

const book = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKS_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_BOOKS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: false,
        isRejected: true
      }
    case 'GET_BOOKS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        bookList: action.payload.data
      }
    case 'GET_BOOKS_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_BOOKS_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: false,
        isRejected: true
      }
    case 'GET_BOOKS_ID_FULFILLED':
      console.log("drtdgdgdffg",action.payload.data)
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        bookList: action.payload.data
      }
      case 'POST_BOOK_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
      case 'POST_BOOK_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
      case 'POST_BOOK_FULFILLED':
        state.bookList.result.push(action.payload.data)
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      }
    case 'PATCH_BOOK_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'PATCH_BOOK_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
      case 'PATCH_BOOK_FULFILLED':
        const find = state.bookList.result.find(item => Number(item.id) === Number(action.payload.data.result.id))
        state.bookList.result[state.bookList.result.indexOf(find)] = action.payload.data.result
        return {
            ...state,
            isLoading: false,
            isFulfilled: true,
        }
    default:
      return state
  }
}

export default book
