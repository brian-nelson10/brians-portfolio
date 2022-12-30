import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './style/Global';
import Font from './style/Font';

ReactDOM.render(
  <>
    <Global />
    <Font />
    <App />
  </>,
  document.getElementById('root')
);