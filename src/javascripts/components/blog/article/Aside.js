import React from 'react'

class Aside extends React.Component {
  render() {
    const { post } = this.props

    return (
      <aside className="author-info">
        <img src="/images/lewis-carroll.png" alt={post.author.name} />
        <div className="author-info__bio">
          <h2>{post.author.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.author.bio }} />
        </div>
      </aside>
    )
  }
}

export default Aside
