/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

 // 配置Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import config from '../../config';
// logger纪录所有Action state
// const middlewares = [];
const { logger } = require('redux-logger');

/* global __DEV__  */
// let createStoreWithMiddleware = createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
if (config.debug==false) {
	createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
} else {
	createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
}
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  // install saga run
  // store.runSaga = sagaMiddleware.run;
  // store.close = () => store.dispatch(END);

  return store;
}
