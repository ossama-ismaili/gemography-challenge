import React from 'react';
import Main from './components/MainComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
