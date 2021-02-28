import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';

// STORE
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// DISPATCH
// store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
