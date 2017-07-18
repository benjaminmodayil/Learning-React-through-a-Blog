import React from 'react'
import Header from './Header'
import ArticleIndex from './ArticleIndex'
import ArticleIndexPageNav from './ArticleIndexPageNav'
import Chat from '../Chat'

class Blog extends React.Component {
  shouldComponentUpdate() {
    return true
  }
  render() {
    return (
      <main className="home-container wrapper">
        <Header />
        <ArticleIndex />
        <ArticleIndexPageNav />
        <Chat />
      </main>
    )
  }
}

export default Blog
