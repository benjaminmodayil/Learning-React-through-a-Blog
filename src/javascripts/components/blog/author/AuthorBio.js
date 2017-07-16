import React from 'react'
import { Link } from 'react-router'
import ArticlePreview from '../../blog/ArticlePreview'
import PageNav from '../../blog/ArticleIndexPageNav'
import posts from '../../../data/posts.json'
import authors from '../../../data/authors.json'

class AuthorBio extends React.Component {
  postRender() {
    const allPosts = posts.response
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
    const info = this.state.post.newPosts[this.props.params.id - 1]
    const posts = this.state.post.newPosts

    return (
      <main className="bio wrapper">
        <Link to="/" className="logo-title">
          <img src="/images/blog-title.svg" alt="Aspiring Writer's Alley - Home" />
        </Link>
        <div className="bio__inner">
          <img className="bio__inner__portrait" src={`${info.author.img}`} alt={`${info.author.name} Portrait`} />
          <h1>{info.author.name}</h1>
          {info.author.bio}
        </div>
        <div className="article-index">
          {posts.map(post => {
            if (post.body == null) {
            } else {
              return <ArticlePreview postInfo={post} />
            }
          })}
        </div>
        <PageNav />
      </main>
    )
  }
}

export default AuthorBio
