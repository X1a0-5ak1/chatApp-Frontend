import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
