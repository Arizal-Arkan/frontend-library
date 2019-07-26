import { combineReducers } from 'redux'

import book from '../reducers/book'
import category from '../reducers/category'
import borrow from '../reducers/borrow'
import user from '../reducers/user'

const appReducer = combineReducers({
  book,
  category,
  borrow,
  user
})

export default appReducer
