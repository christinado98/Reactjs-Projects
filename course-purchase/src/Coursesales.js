import React, { Component } from 'react';

export default class Coursesales extends Component {

  // whenever a course is clicked add its price to total
  sumPrice = (price) => {
    this.setState({ total: this.state.total + price });
  }

  constructor(props){
    super(props);

    this.state = {
      total: 0 //intial total price
    };

  }
  render(){
    var courses = this.props.items.map((item, i) => {
      return <Course name={item.name} price={item.price}
        key={i} sumPrice={this.sumPrice} active={item.active} />
    });

    return(
      <div>
        <h1>Welcome to our Course Buyer!</h1>
        <h2>Click to select course</h2>
        <div id="courses">
          {courses}
          <p id="total">Total: <strong>{this.state.total}</strong></p>
        </div>
      </div>
    );
  }
}

class Course extends Component {

  clicker = () => {
    var active = !this.state.active;
    this.setState({active: active});

    // call sumPrice: if true then positive price, else negative price
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  constructor(props){
    super(props);

    this.state = {
      active: false // initially user hasnt bought anything yet
    };
  }
  
  render(){
    return(
      <div>
        <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} <strong>{this.props.price}</strong></p>
      </div>
    );
  }
}

