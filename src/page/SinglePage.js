import React from 'react'
import { Link } from 'react-router-dom'
import EyeCatch from '../img/blogpost-mv.png';

const SinglePage = props => {
  const { id, title, published, content, comments } = props.location.state
  return (
    <>
      <nav className="breadcrumbs">
        <div className="breadcrumbs-inner l-container">
          <ul class="breadcrumbs__list">
            <li className="breadcrumbs__list-item"><Link to='/'>Home</Link></li>
            <li className="breadcrumbs__list-item">{title}</li>
          </ul>
        </div>
      </nav>

      <section className="l-container single">
        <div className="single__meta">
          <div className="single__published">{published}</div>
          <div className="single__title">{title}</div>
        </div>

        <div className="single__eyecacth" style={{ backgroundImage: `url(${EyeCatch})`}}></div>

        <div className="single__content">{content}</div>
      </section>
    </>
  )
}

export default SinglePage
