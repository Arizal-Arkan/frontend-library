const initialState = {
  userList: [],
  isLoading: false,
  isFullfiled: false,
  isRejected: false
}
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFullfiled: false,
        isRejected: false
      }
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: false,
        isRejected: true
      }
    case 'GET_USER_FULFILED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: true,
        isRejected: false,
        userList: action.payload.data
      }
    case 'GET_BY_EMAIL_PENDING':
      return {
        ...state,
        isLoading: true,
        isFullfiled: false,
        isRejected: false
      }
    case 'GET_BY_EMAIL_REJECTED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: false,
        isRejected: true
      }
    case 'GET_BY_EMAIL_FULFILED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: true,
        isRejected: false,
        userList: action.payload.data
      }
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFullfiled: false,
        isRejected: false
      }
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: false,
        isRejected: true
      }
    case 'REGISTER_FULFILED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: true,
        isRejected: false,
        userList: action.payload.data
      }
    default:
      return state
  }
}

export default user
