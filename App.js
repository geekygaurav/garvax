import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigation from './App/Navigation/Navigation'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './App/Redux/Reducer/AppReducer'

const store = createStore(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
