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
    this.state = { post: null }
  }

  postRender() {
    const allPosts = JSON.parse(JSON.stringify(posts.response))
    const { id } = this.props.params
    let post = allPosts.find(item => item.id == id)
    const author = authors.response.find(item => item.id == post.author)

    post = Object.assign(post, { author })

    this.setState({ post })
  }

  componentShouldMount() {
    this.postRender()
  }

  componentWillMount() {
    this.postRender()
  }

  render() {
    const post = this.state.post
    console.log(post)

    if (post) {
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
    } else {
      null
    }
  }
}

export default Article
