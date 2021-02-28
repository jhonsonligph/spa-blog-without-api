import React from 'react'
import { useSelector } from 'react-redux'

import Slider from '../components/Slider'
import Register from '../components/Register'
import Login from '../components/Login'
import News from '../components/News/News'

const HomePage = props => {
  const isToggleLogin = useSelector(state => state.isToggleLogin);
  const isRegister = useSelector(state => state.isRegister)
  return (
    <>
      {isToggleLogin ? isRegister ? <Register/> : <Login/> : <Slider />}
      <News />
    </>
  )
}

export default HomePage
