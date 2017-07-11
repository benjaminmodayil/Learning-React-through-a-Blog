import React from 'react'

class Meta extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div className="article_meta">
        <small>
          <span>Categories</span>
          <span><a href="">{post.meta.categories.join(', ')}</a></span>
        </small>
        <small>
          <span>Tags</span>
          <span>
            <a href="">{post.meta.tags.join(', ')}</a>
          </span>
        </small>
      </div>
    )
  }
}

export default Meta
