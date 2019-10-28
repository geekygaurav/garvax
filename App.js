import React, {Component} from 'react';
import Navigation from './App/Navigation/Navigation'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './App/Redux/Reducer/index'
import rootsaga from './App/Saga/index'

/**
 * We are initializing our saga and redux store in this file.
 * Saga middleware will be listneing whenever we invoke any action.
 */

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootsaga)



export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation/>
      </Provider>
    );
  }
}

