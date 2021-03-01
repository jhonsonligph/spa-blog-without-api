import React from 'react'
import ArticleData from '../data/articles.json'

const Dots = props => {
  const recentThree = [...ArticleData.slice(0, 3)];
  console.log(recentThree)
  return (
    <div className="slider__dots">
      {recentThree.map((slide, index)=>(
        <span 
          key={index} 
          className={`slider__dot ${props.activeIndex === index ? 'dot-active' : ''}`} 
          onClick={event => props.onclick((event.target.value = index))}></span>
      ))}
    </div>
  )
}

export default Dots
