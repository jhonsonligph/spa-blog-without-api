import React from 'react'

const Arrows = props => {
  return (
    <div className="arrows">
      <span className="slider__prev" onClick={props.prevSlide}></span>
      <span className="slider__next" onClick={props.nextSlide}></span>
    </div>
  )
}

export default Arrows
