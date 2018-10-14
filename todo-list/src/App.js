import React, { Component } from 'react';
import './App.css';
import Container from './Container';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Container />
        </div>
      </div>
    );
  }
}

