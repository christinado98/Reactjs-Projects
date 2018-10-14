import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Simple Counting Watch</h1>
        <Timer start={ Date.now() }/>
      </div>
    );
  }
}

