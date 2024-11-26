import { SET_USER_LOGIN } from '../actions'
import { SET_USER_LOGOUT } from '../actions'
import customFetch from '../utils/customFetch'

const user_reducer = (state, action) => {
  if (action.type === SET_USER_LOGIN) {
    return { ...state, user: action.payload }
  }
  if (action.type === SET_USER_LOGOUT) {
    return { ...state, user: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer
