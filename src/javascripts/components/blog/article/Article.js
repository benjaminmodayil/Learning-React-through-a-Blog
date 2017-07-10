import React from 'react'
import Header from './Header'
import Text from './Text'
import Meta from './Meta'
import Aside from './Aside'
// import posts from '../../../data/posts'
// console.log(posts)
//need to figure out how to link to this page...

class Article extends React.Component {
  constructor() {
    super()
    this.state = { post: {} }
  }
  // pull post into state
  componentWillMount() {
    const postId = 1
    this.setState(
      {
        // post: posts.find(item => item.id == postId)
      }
    )
  }
  // pass into components to render data
  // then do the author
  render() {
    return (
      <main className="article-container">
        <article>
          <Header />
          <Text />
          <Meta />
          <Aside />
        </article>
      </main>
    )
  }
}

export default Article
