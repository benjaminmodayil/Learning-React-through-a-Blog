import React     from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'
import App       from './presenters/application'
import Chat from './components/Chat'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Chat } />
  </Route>
)
