import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div className="headerComp">
        <h1>React Search!</h1>
        <h3>Here is a list of countries rendered from a JSON object</h3>
      </div>
    );
  }
}

export default Header;
