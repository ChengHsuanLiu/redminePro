/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

import App from './app/App';

const store = configureStore();

export default class RedminePro extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
      )
  }
}

AppRegistry.registerComponent('RedminePro', () => RedminePro);
