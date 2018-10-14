import React, { Component } from 'react';
import './App.css';
import Coursesales from './Coursesales';

export default class App extends Component {
  render() {
    // passing data from App to Coursesales
    var courses = [
      { name: 'Complete iOS10 dev course', price: 199.99},
      { name: 'Complete pentesting course', price: 299.99},
      { name: 'Complete front end dev course', price: 99.99},
      { name: 'Bounty and web app pentesting', price: 299.99},
    ];

    return (
      <div className="App">
        
        <Coursesales items={ courses }/>
      </div>
    );
  }
}
