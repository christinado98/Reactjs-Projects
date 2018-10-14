import React, { Component } from 'react';

class DisplayList extends Component {
  render(){
    return(
      <div>
        <ul className="container">
          {this.props.list.map((country, i) =>
            <li className="list-group-item listItem" key={i}>{ country }</li>)}
        </ul>
      </div>
    );
  }
}

export default DisplayList;
