import React from 'react'
import ArticlePreview from './ArticlePreview'
import posts from '../../data/posts.json'
import authors from '../../data/authors.json'

class ArticleIndex extends React.Component {
  constructor() {
    super()
    this.state = { post: [] }
  }

  postRender() {
    const allPosts = JSON.parse(JSON.stringify(posts.response))
    const newPosts = []
    for (var i = 0; i <= allPosts.length; i++) {
      let post = allPosts[i] || {}
      const author = authors.response.find(item => item.id == post.author)
      post = Object.assign(post, { author })
      newPosts.push(post)
    }
    this.setState({ post: { newPosts } })
  }

  componentShouldMount() {
    this.postRender()
  }

  componentWillMount() {
    this.postRender()
  }

  render() {
    const posts = this.state.post.newPosts
    posts.map(post => {
      if (post.body == null) {
      }
    })

    return (
      <div className="article-index">
        {posts.map(post => {
          if (post.body == null) {
          } else {
            return <ArticlePreview key={post.title} postInfo={post} />
          }
        })}
      </div>
    )
  }
}

export default ArticleIndex
