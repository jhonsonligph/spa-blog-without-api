import React, { useState, useEffect } from 'react'
import ArticleData from '../data/articles.json'
import Arrows from './Arrows'
import Dots from './Dots'
import SliderContent from './SliderContent'

const Slider = props => {
  const recentThree = [...ArticleData.slice(0, 3)];
  const len = recentThree.length - 1
  const [activeIndex, setActiveIndex] = useState(0)
  const prevSlideItem = () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
  const nextSlideItem = () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <>
      <div className="slider__container">
        <SliderContent activeIndex={activeIndex} />
        <Arrows prevSlide={prevSlideItem} nextSlide={nextSlideItem} />
        <Dots activeIndex={activeIndex} onclick={activeIndex => setActiveIndex(activeIndex)} />
      </div>
    </>
  )
}

export default Slider
