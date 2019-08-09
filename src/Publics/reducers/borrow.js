const initialState = {
  borrowList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
}

const borrow = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BORROWS_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_BORROWS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'GET_BORROWS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        borrowList: action.payload.data
      }
    case 'POST_BORROW_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'POST_BORROW_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'POST_BORROW_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        borrowList: action.payload.data
      }
    case 'GET_BORROW_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      }
    case 'GET_BORROW_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      }
    case 'GET_BORROW_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        borrowList: action.payload.data
      }
    case 'PATCH_BORROW_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'PATCH_BORROW_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'PATCH_BORROW_FULFILLED':
      if(action.payload.data.result.returned_at !== null) {
        const find = state.borrowList.result.find(item => Number(item.id) === Number(action.payload.data.result[0].id))
        state.borrowList.result[state.borrowList.result.indexOf(find)] = action.payload.data.result[0]
      }
      return {
        ...state,
        isLoading: false,
        isFulfilled: true
      }

    default:
      return state
  }
}

export default borrow
