import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import user from '../reducers/reducer-user'
import {
  products
} from '../reducers/reducer-products'
import {
  product
} from '../reducers/reducer-product'
import {
  captcha
} from '../reducers/reducer-captcha'
import {
  file
} from '../reducers/reducer-file'
import {
  combineReducers
} from 'redux'

const logger = createLogger();

const middleware = applyMiddleware(
  thunk,
  logger
)

const rootReducer = combineReducers({
  user,
  products,
  product,
  captcha,
  file
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
)

export default store