const regsiterReducer = (state = false, action) => {
  switch(action.type) {
    case 'REGISTER':
      return !state
    default:
      return state
  }
}

export default regsiterReducer