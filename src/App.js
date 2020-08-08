import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Routes } from './route';
import { Provider } from 'react-redux'
import store from "./state/state"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <HashRouter>
            <Routes></Routes>
          </HashRouter></Provider>
      </header>
    </div>
  );
}

export default App;
