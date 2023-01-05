import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './style/Global';
import Font from './style/Font';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <>
  <Router>
    <Global />
    <Font />
    <App />
    </Router>
  </>,
  document.getElementById('root')
);