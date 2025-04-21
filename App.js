import {View, Text} from 'react-native';
import React from 'react';
import Router from './src/navigation/Router';
import {store} from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
