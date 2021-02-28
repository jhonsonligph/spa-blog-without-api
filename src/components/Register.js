import React from 'react'
import { useDispatch } from 'react-redux'
import { isRegister } from '../actions'

const Register = props => {
  const dispatch = useDispatch()

  const toggleRegister = e => {
    dispatch(isRegister())
  }

  return (
    <div className="form register">
      <h2>Register</h2>
      <form onSubmit={e=>e.preventDefault()}>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email"/>
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </div>
        <div className="form__group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword"/>
        </div>
        <div className="form__group">
          <input className="btn btn__form" type="submit" value="submit"/>
        </div>
        <p className="form__text">Already have an account? <a href="javascript:void(0)" onClick={toggleRegister}>Login Here</a></p>
      </form>
    </div>
  )
}

export default Register
