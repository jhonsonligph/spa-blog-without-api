import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import HeaderLOGO from '../img/header-logo.png';
import { toggleLogin } from '../actions'

const Header = props => {
  const isToggleLogin = useSelector(state => state.isToggleLogin);
  const dispatch = useDispatch()
  const text = isToggleLogin ? 'close' : 'login'

  const handleToggleLogin = e => {
    dispatch(toggleLogin())
  }

  const disableToggleIn = e => {
    if(!isToggleLogin) {
      return
    } else {
      dispatch(toggleLogin())
    }
  }

  return (
    <>
      <header className="l-main header">
        <Link to='/' onClick={disableToggleIn}>
          <h1 className="header__logo">
            <img src={HeaderLOGO} alt="LOGO" />
          </h1>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <button className="btn btn--login" onClick={handleToggleLogin}>{text}</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
