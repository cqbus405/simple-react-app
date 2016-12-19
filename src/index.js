import React from 'react'
import store from './store/store'
import {
  Router,
  Route,
  browserHistory
} from 'react-router'
import {
  Provider
} from 'react-redux'
import {
  render
} from 'react-dom'

import LoginPage from './containers/LoginPage'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/login' component={LoginPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)