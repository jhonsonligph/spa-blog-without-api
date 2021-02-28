// ACTIONS
export const increment = e => {
  return {
    type: 'INCREMENT',
    payload: e
  }
}

export const decrement = e => {
  return {
    type: 'DECREMENT',
    payload: e
  }
}

export const loggedIn = e => {
  return {
    type: 'SIGN_IN',
    payload: e
  }
}

export const toggleLogin = e => {
  return {
    type: 'TOGGLE_LOGIN',
    payload: e
  }
}

export const isRegister = e => {
  return {
    type: 'REGISTER',
    payload: e
  }
}