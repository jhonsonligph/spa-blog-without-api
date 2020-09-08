import React from 'react';
import PostEyecatch from '../../img/blogpost-eyecatch.png';

const News = props => {
  return (
    <section className="l-container news">
      <div className="news__container">
        <h3 className="news__title">News</h3>
        <ul className="news__list">
          <li className="news__item">
            <article className="post">
              <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
              <div className="post__date">2019.06.19</div>
              <h4 className="post__title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h4>
            </article>
          </li>
          <li className="news__item">
            <article className="post">
              <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
              <div className="post__date">2019.06.19</div>
              <h4 className="post__title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h4>
            </article>
          </li>
          <li className="news__item">
            <article className="post">
              <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
              <div className="post__date">2019.06.19</div>
              <h4 className="post__title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h4>
            </article>
          </li>
          <li className="news__item">
            <article className="post">
              <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
              <div className="post__date">2019.06.19</div>
              <h4 className="post__title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h4>
            </article>
          </li>
          <li className="news__item">
            <article className="post">
              <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
              <div className="post__date">2019.06.19</div>
              <h4 className="post__title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h4>
            </article>
          </li>
          <li className="news__item">
            <article className="post">
              <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
              <div className="post__date">2019.06.19</div>
              <h4 className="post__title">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h4>
            </article>
          </li>
        </ul>
      </div>
      <div className="news__load-more">
        <button className="btn">load more</button>
      </div>
    </section>
  )
}

export default News
