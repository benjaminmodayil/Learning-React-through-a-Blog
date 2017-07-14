import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './presenters/application'
import Blog from './components/blog/Blog'
import Article from './components/blog/article/Article'
import Chat from './components/Chat'
import Author from './components/blog/author/AuthorBio'

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Blog} />
      <Route path="article/:id" component={Article} />
      <Route path="author/:authorId" component={Author} />
    </Route>
  </Router>
)
