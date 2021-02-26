import React from 'react'
import PostEyecatch from '../../img/blogpost-eyecatch.png';
import { Link } from 'react-router-dom'

const Article = ({ history, article: { id, title, published, content, comments }}) => {
  return (
    <Link to={{
      pathname: `/posts/${id}`,
      state: { id, title, published, content, comments }
    }}>
      <article className={`post post-${id}`}>
        <div className="post__eyecatch" style={{ backgroundImage: `url(${PostEyecatch})` }}></div>
        <div className="post__date">{published}</div>
        <h4 className="post__title">{title}</h4>
      </article>
    </Link>
  )
}

export default Article
