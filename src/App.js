import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Services/route';
import './App.css';

function App({history}) {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
