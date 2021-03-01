import React from 'react'
import ArticleData from '../data/articles.json'

const SliderContent = props => {
  const recentThree = [...ArticleData.slice(0, 3)];
  
  return (
    <ul>
      {recentThree.map((slide, index) => (
      <li className={`slider__slides ${index === props.activeIndex ? 'active' : 'inactive'}`} key={index}>
        <article className="article" style={{ backgroundImage: `url(${slide.eyecatch})` }}>
          <div className="article__wrapper">
            <div className="l-container article__container">
              <h2 className="article__title">
                <span>{slide.title}</span>
              </h2>
              <div className="article__date">{slide.published}</div>
            </div>
          </div>
        </article>
      </li>
      ))}
    </ul>
  )
}

export default SliderContent
