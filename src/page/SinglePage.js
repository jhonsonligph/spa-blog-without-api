import React from 'react'
import { Link } from 'react-router-dom'
import EyeCatch from '../img/blogpost-mv.png';

const SinglePage = props => {
  const { title, published, content, comments } = props.location.state

  console.log(comments)

  return (
    <>
      <nav className="breadcrumbs">
        <div className="breadcrumbs-inner l-container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__list-item"><Link to='/'>Home</Link></li>
            <li className="breadcrumbs__list-item">{title}</li>
          </ul>
        </div>
      </nav>

      <section className="l-container single">
        <div className="single__meta">
          <div className="single__published">{published}</div>
          <h2 className="single__title">{title}</h2>
        </div>

        <div className="single__eyecatch" style={{ backgroundImage: `url(${EyeCatch})`}}></div>

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
                <li className="comments__list-item">
                  <p className="comments__body">{body}</p>
                  <div className="comments__date">{createdAt}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="comments__form">
            <form>
              <textarea placeholder="Write Comment"></textarea>
              <input class="btn btn--submit" type="submit" value="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePage
