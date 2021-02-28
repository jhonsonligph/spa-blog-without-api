import React from 'react'
import { isRegister } from '../actions'
import { useDispatch } from 'react-redux'

const Login = props => {
  const dispatch = useDispatch()

  const handleRegister = e => {
    dispatch(isRegister())
  }

  return (
    <div className="form register">
      <h2>LogIn</h2>
      <form onSubmit={e=>e.preventDefault()}>
        <div className="form__group">
          <label htmlFor="emailSignIn">Email</label>
          <input type="text" id="emailSignIn"/>
        </div>
        <div className="form__group">
          <label htmlFor="passwordSignIn">Password</label>
          <input type="password" id="passwordSignIn"/>
        </div>
        <div className="form__group">
          <input className="btn btn__form" type="submit" value="login"/>
        </div>
        <p className="form__text">No account yet? <a href="javascript:void(0)" onClick={handleRegister}>Register Here</a></p>
      </form>
    </div>
  )
}

export default Login
