import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import Routes from './Services/Routes/routes';
import history from './Services/history';
import store from './Services/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
