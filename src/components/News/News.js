import React, { useState } from 'react';
import Article from './Article'
import ArticleData from '../../data/articles.json'

const News = props => {
  const [collapsed, setCollapsed] = useState(false);
  const loadMoreHandler = () => {
    setCollapsed(prevState => !prevState)
  }
  const isCollapsed = collapsed ? ' is-collapsed' : ''
  const theHeight = collapsed ? 1944 : 972
  const text = collapsed ? 'hide':'load more'

  return (
    <section className="l-container news">
      <div className="news__container">
        <h3 className="news__title">News</h3>
        <ul className={`news__list${isCollapsed}`} style={{height: theHeight}}>
          {ArticleData.map((article, index) => (
            <li className="news__item" key={index}>
              <Article article={article} />
            </li>
          ))}
        </ul>
      </div>
      <div className="news__load-more">
        <button className="btn" onClick={loadMoreHandler}>{text}</button>
      </div>
    </section>
  )
}

export default News
