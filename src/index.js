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
import ProductsPage from './containers/ProductsPage'
import ProductPage from './containers/ProductPage'
import CreateProductPage from './containers/CreateProductPage'
import '../build/styles/main.css'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/login' component={LoginPage} />
      <Route path='/products' component={ProductsPage} />
      <Route path='/products/create' component={CreateProductPage} />
      <Route path='/products/:productId' component={ProductPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)