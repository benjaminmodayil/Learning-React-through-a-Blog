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
    this.state = { posts: {} }
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
    this.setState({ posts: { newPosts } })
  }

  componentShouldMount() {
    this.test()
  }

  componentWillMount() {
    // console.log(this.props)
    this.test()
    console.log(this.state.posts.newPosts)
  }
  componentDidMount() {
    console.log(this.state.posts.newPosts[1])
  }

  render() {
    return (
      <main className="article-container">
        <article>
          <Header post={this.state.posts.newPosts[this.props.params.id - 1]} />
          <Text post={this.state.posts.newPosts[this.props.params.id - 1]} />
          <Meta post={this.state.posts.newPosts[this.props.params.id - 1]} />
          <Aside post={this.state.posts.newPosts[this.props.params.id - 1]} />
        </article>
      </main>
    )
  }
}

export default Article
