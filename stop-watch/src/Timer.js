import React, { Component } from 'react';

export default class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000);
  }

  ticker = () => {
    this.setState(
      {clock: new Date() - this.props.start}
    )
  }

  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };
  }
  render(){
    var clock = Math.round(this.state.clock / 1000);
    return(
      <div className="timer">
        <p>You have been on this site for:</p>
        <br />
        <span>{clock}</span>
        <p id="second">Seconds!</p>
      </div>
    );
  }
}

