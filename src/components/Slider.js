import React from 'react'
import EyeCatch from '../img/blogpost-mv.png';

const Slider = props => {
  return (
    <React.Fragment>
      <section className="slider">
        <ul className="slider__list">
          <li className="slider__list-item">

            <article className="article" style={{ backgroundImage: `url(${EyeCatch})` }}>
              <div className="article__wrapper">
                <div className="l-container article__container">
                  <h2 className="article__title">
                    <span>サンプルテキスト</span>
                    <span>サンプル ルテキスト</span>
                    <span>サンプルテキスト</span>
                  </h2>
                  <div className="article__date">
                    2019.06.19
                  </div>
                </div>
              </div>
            </article>

          </li>
        </ul>
        <div className="slider__controls">
          {/**
         * prev, next, pagination
         */}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Slider
