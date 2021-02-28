import React from 'react'
import PostEyecatch from '../../img/blogpost-eyecatch.png';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLogin } from '../../actions'

const Article = ({article: { id, title, published, content, comments, eyecatch }}) => {
  const dispatch = useDispatch()
  const isToggleLogin = useSelector(state => state.isToggleLogin);

  const disableToggleIn = e => {
    if(!isToggleLogin) {
      return
    } else {
      dispatch(toggleLogin())
    }
  }

  return (
    <Link to={{
      pathname: `/${id}`,
      state: { id, title, published, content, comments, eyecatch }
    }} onClick={disableToggleIn}>
      <article className={`post post-${id}`}>
        <div className="post__eyecatch" style={{ backgroundImage: `url(${eyecatch ? eyecatch : PostEyecatch})` }}></div>
        <div className="post__date">{published}</div>
        <h4 className="post__title">{title}</h4>
      </article>
    </Link>
  )
}

export default Article
