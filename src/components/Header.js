import React from 'react'
import HeaderLOGO from '../img/header-logo.png';
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <React.Fragment>
      <header className="l-main header">
        <Link to='/'>
          <h1 className="header__logo">
            <img src={HeaderLOGO} alt="LOGO" />
          </h1>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <button className="btn btn--login">login</button>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header
