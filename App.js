/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configure-store';
import './src/lib/InitApp/InitGlobal';
import './src/lib/InitApp/InitLog';
// import rootSaga from './sagas/index';
import App from './src/main';

const store = configureStore();

// run root saga
// store.runSaga(rootSaga);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

