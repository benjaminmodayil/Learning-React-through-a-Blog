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

  postRender() {
    const allPosts = posts.response
    const newPosts = []
    allPosts.map(i => {
      let post = allPosts.find(item => item.id == i.id)
      const author = authors.response.find(item => item.id == i.author)
      post = Object.assign(i, { author })
      newPosts.push(i)
    })
    this.setState({ post: { newPosts } })
  }

  componentShouldMount() {
    this.postRender()
  }

  componentWillMount() {
    this.postRender()
  }

  render() {
    const post = this.state.post.newPosts[this.props.params.id - 1]
    return (
      <main className="article-container wrapper">
        <article>
          <Header post={post} />
          <Text post={post} />
          <Meta post={post} />
          <Aside post={post} />
        </article>
      </main>
    )
  }
}

export default Article
