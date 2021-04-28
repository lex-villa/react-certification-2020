import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Store from './utils/store/Store';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
