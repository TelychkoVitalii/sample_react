import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

export const initApp = () => (
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
);

window.AppInit && initApp();

serviceWorker.unregister();
