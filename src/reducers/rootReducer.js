const initState = {
  posts: [
    { id: 1, title: 'Test 1', body: 'This is a test post' },
    { id: 2, title: 'Test 1', body: 'This is a test post' },
    { id: 3, title: 'Test 1', body: 'This is a test post' }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;