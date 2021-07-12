import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fonts/montserrat/fonts.css';
import './fonts/segoe-ui/fonts.css'
import './fonts/roboto/fonts.css';

import App from './blocks/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
