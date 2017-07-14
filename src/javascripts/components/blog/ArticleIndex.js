import React from 'react'
import ArticlePreview from './ArticlePreview'
import posts from '../../data/posts.json'
import authors from '../../data/authors.json'

class ArticleIndex extends React.Component {
  constructor() {
    super()
    this.state = { posts: [] }
  }
  test() {
    const allPosts = posts.response
    const newPosts = []
    for (var i = 0; i <= allPosts.length; i++) {
      let post = allPosts[i] || {}
      const author = authors.response.find(item => item.id == post.author)
      post = Object.assign(post, { author })
      newPosts.push(post)
    }

    this.setState({ posts: allPosts })
  }

  componentShouldMount() {
    this.test()
  }

  componentWillMount() {
    this.test()
  }

  render() {
    return (
      <div className="article-index">
        {this.state.posts.map(post => {
          return <ArticlePreview key={post.preview} postInfo={post} />
        })}
      </div>
    )
  }
}

export default ArticleIndex
