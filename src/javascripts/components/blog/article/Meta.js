import React from 'react'

class Meta extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div className="article_meta">
        <small>
          <span>Categories</span>
          <span>
            {post.meta.categories.map(category => {
              return <a href="#">{`${category}, `}</a>
            })}
          </span>
        </small>
        <small>
          <span>Tags</span>
          <span>
            {post.meta.tags.map(tag => {
              return <a href="#">{`${tag}, `}</a>
            })}
          </span>
        </small>
      </div>
    )
  }
}

export default Meta
