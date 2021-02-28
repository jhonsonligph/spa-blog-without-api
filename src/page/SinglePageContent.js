import React from 'react'
import EyeCatch from '../img/blogpost-mv.png';


const SinglePageContent = ({data: { title, published, content, comments, eyecatch }}) => {
  return (
    <section className="single l-container">
      <div className="single__meta">
        <div className="single__published">{published}</div>
        <h2 className="single__title">{title}</h2>
      </div>

      <div className="single__eyecatch" style={{ backgroundImage: `url(${eyecatch ? eyecatch : EyeCatch})`}}></div>

      <div className="single__content">
        {content.map(({text}, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <div className="comments">
        <h3 className="comments__head">COMMENTS</h3>
        <div className="comments__container">
          <ul className="comments__list">
            {comments.map(({body, createdAt},i)=>(
              <li key={i} className="comments__list-item">
                <p className="comments__body">{body}</p>
                <div className="comments__date">{createdAt}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="comments__form">
          <form onSubmit={e => e.preventDefault()}>
            <textarea placeholder="Write Comment"></textarea>
            <div className="comments__form-group">
              <input className="btn btn--submit" type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SinglePageContent
