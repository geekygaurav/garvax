import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigation from './App/Navigation/Navigation'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './App/Redux/Reducer/index'
import rootsaga from './App/Saga/index'

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

