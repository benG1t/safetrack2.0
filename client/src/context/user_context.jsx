import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/user_reducer'
import { SET_USER_LOGIN, SET_USER_LOGOUT } from '../actions'
import customFetch from '../utils/customFetch'

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || false
}
const initialState = {
  user: getUserFromLocalStorage(),
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loginUserData = async () => {
    const { data: user } = await customFetch.get('/users/current-user')
    dispatch({ type: SET_USER_LOGIN, payload: user })
    localStorage.setItem('user', JSON.stringify(user))
  }
  const logout = async () => {
    dispatch({ type: SET_USER_LOGOUT })
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        loginUserData,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => {
  return useContext(UserContext)
}
