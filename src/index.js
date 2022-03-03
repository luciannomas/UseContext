import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css'
import './index.css';
import App from './App';

import { Switch , BrowserRouter as R, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
     <R>
      <App />
    </R>
    
  </React.StrictMode>,
  document.getElementById('root')
);

