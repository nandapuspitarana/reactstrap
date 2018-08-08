import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

const reducer = (
  state = {
    dataContent: [],
    Loader: false,
    isLogin: false,
    kategori: ['AMP', 'REACTJS', 'REMOTE WORKING', 'GIT', 'WORDPRESS']
  },
  action
) => {
  switch (action.type) {
    case 'CONTENT':
      return {
        ...state,
        dataContent: state.dataContent
      };
    case 'LOGIN':
      return {
        ...state,
        isLogin: true
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
