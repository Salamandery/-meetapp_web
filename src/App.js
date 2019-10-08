import React from 'react';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import Routes from './Services/Routes/routes';
import history from './Services/history';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
