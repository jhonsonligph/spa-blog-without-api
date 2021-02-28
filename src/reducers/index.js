import counterReducer from './counter'
import loggedReducer from './isLogged'
import registerReducer from './isRegister'
import toggleLoginReducer from './toggleLogin'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  isRegister: registerReducer,
  isToggleLogin: toggleLoginReducer
})

export default rootReducer