import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './Authen';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Simple React Login Form</h1>
        <Authen />
      </div>
    );
  }
}

