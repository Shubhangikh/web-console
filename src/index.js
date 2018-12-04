import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './config/storeConfig';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import './index.css';

const store = storeConfig;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
