import React, { Component } from 'react';

export default class DisplayList extends Component {

  render(){
    return(
      <div className="displayList">
        <ol className="list-group">
          { this.props.todos.map((todo, i) =>
            <li key={todo} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="pull-left">{ todo }</span>
              <button onClick={ this.props.removeItem.bind(this, todo)}  className="btn btn-primary pull-right removeButton">X</button>
            </li>
          )}
        </ol>
      </div>
    );
  }
}

