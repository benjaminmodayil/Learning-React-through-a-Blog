import React from 'react'
import ArticlePreview from './ArticlePreview'
import posts from '../../data/posts.json'
import authors from '../../data/authors.json'

class ArticleIndex extends React.Component {
  constructor() {
    super()
    this.state = { post: {} }
  }
  // pull post into state
  componentWillMount() {
    const postId = 1
    let post = posts.response.find(item => item.id == postId)
    const author = authors.response.find(item => item.id == post.author)
    post = Object.assign(post, { author })
    this.setState({ post })
  }

  render() {
    return (
      <div className="article-index">
        <ArticlePreview post={this.state.post} />
        <ArticlePreview />
        <ArticlePreview />
      </div>
    )
  }
}

export default ArticleIndex
