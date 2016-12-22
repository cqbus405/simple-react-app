import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import loginFeedback from '../reducers/reducer-login'
import {
  productsInfo
} from '../reducers/reducer-product'
import {
  combineReducers
} from 'redux'

const logger = createLogger();

const middleware = applyMiddleware(
  thunk,
  logger
)

const rootReducer = combineReducers({
  loginFeedback,
  productsInfo
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(middleware)
)

export default store