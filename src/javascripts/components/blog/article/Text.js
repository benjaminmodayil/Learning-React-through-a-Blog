import React from 'react'
import { Link } from 'react-router'

class Text extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div className="article-inner">
        <div className="article-inner__card">
          <h1>{post.title}</h1>
          <div className="article-inner__authormeta">
            <Link to={`/author/${post.author.id}`}>{post.author.name}</Link>
            <span className="article-inner__date">
              {post.meta.date}
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

export default Text
