import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Register from '../components/Register'
import Login from '../components/Login'
import SinglePageContent from './SinglePageContent'

const SinglePage = props => {
  const isToggleLogin = useSelector(state => state.isToggleLogin);
  const isRegister = useSelector(state => state.isRegister)
  const data = props.location.state
  const { title } = props.location.state
  const breadcrumbs = <nav className="breadcrumbs">
                        <div className="breadcrumbs-inner l-container">
                          <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__list-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumbs__list-item">{title}</li>
                          </ul>
                        </div>
                      </nav>
  return (
    <>
      {isToggleLogin ? isRegister ? <Register/> : <Login/> : breadcrumbs}
      <SinglePageContent data={data} />
      
    </>
  )
}

export default SinglePage
