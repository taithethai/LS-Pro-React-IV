import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Hobbies from './Hobbies';
import Media from './Media';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/hobbies">Hobbies</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
        </ul>
        <Route path="/about" component={About}/>
        <Route path="/hobbies" component={Hobbies}/>
        <Route path="/media" component={Media}/>
      </div>
      </Router>
    );
  }
}

export default App;
