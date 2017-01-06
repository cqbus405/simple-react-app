import React from 'react'
import store from './store/store'
import {
  IndexRoute,
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
import EditProductPage from './containers/EditProductPage'
import NotFoundPage from './containers/NotFoundPage'
import App from './containers/App'
import Home from './containers/Home'

import {
  checkAuth
} from './utils/util-auth'

import '../build/styles/main.css'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='login' component={LoginPage} onEnter={checkAuth} />
        <Route path='products' component={ProductsPage} />
        <Route path='products/product/:id' component={ProductPage} />
        <Route path='product/create' component={CreateProductPage} />
        <Route path='product/edit' component={EditProductPage} />
      </Route>
      <Route path='*' component={NotFoundPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)