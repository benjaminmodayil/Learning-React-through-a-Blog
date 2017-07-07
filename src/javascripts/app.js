import React  from 'react'
import DOM    from 'react-dom';
import Repo   from './repo'
import Root   from './presenters/root'
import routes from './routes'
import { AppContainer } from 'react-hot-loader'
import { Router, browserHistory } from 'react-router'

const repo = new Repo()
// Render
DOM.render(
  <AppContainer>
    <Root repo={ repo }>
      <Router history={ browserHistory } routes={ routes } />
    </Root>
  </AppContainer>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./presenters/root', () => {
    const NewRoot = require('./presenters/root').default
    DOM.render(
      <AppContainer>
        <NewRoot repo={ repo }>
          <Router history={ browserHistory } routes={ routes } />
        </NewRoot>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
