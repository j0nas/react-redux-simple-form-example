import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import Main from '../views/Main';

const enhancer = compose(...(window.devToolsExtension ? [window.devToolsExtension()] : []));
const store = createStore(rootReducer, enhancer);
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement,
);
