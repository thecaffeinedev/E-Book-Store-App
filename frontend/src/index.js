import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

