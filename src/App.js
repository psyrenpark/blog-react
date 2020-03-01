import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>test22</h2>
      </header>
    </div>
  );
}


function Test(){

  const basename = "/";

  return (
    <Router basename={basename}>
    <App />
  </Router>
  )
}


export default Test;
