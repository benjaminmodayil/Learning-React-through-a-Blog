import React from 'react'
import Header from './Header'
import ArticleIndex from './ArticleIndex'
import ArticleIndexPageNav from './ArticleIndexPageNav'

class Blog extends React.Component {
  render() {
    // console.log(this.props.params)

    return (
      <main className="home-container">
        <Header />
        <ArticleIndex />
        <ArticleIndexPageNav />
      </main>
    )
  }
}

export default Blog
