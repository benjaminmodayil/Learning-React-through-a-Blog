import React from 'react'
import Header from './Header'
import Text from './Text'
import Meta from './Meta'
import Aside from './Aside'
import posts from '../../../data/posts.json'
import authors from '../../../data/authors.json'

class Article extends React.Component {
  constructor() {
    super()
    this.state = { post: {} }
  }
  test() {
    const newMessages = this.state.messages
    let postr = posts.response
    for (var i = 1; i <= postr.length; i++) {
      let postId = i
      let post = postr.find(item => item.id == postId)
      const author = authors.response.find(item => item.id == post.author)
      post = Object.assign(post, { author })
      this.setState({ post })
    }
    // console.log(this.props.params.articleId)
  }

  componentShouldMount() {
    this.test()
  }

  componentWillMount() {
    this.test()
  }

  render() {
    return (
      <main className="article-container">
        <article>
          <Header post={this.state.post} />
          <Text post={this.state.post} />
        </article>
        <Meta post={this.state.post} />
        <Aside post={this.state.post} />
      </main>
    )
  }
}

export default Article
