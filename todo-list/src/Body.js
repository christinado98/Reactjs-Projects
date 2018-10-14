import React, { Component } from 'react';
import DisplayList from './DisplayList';

export default class Body extends Component {

  saveNewItem = (event) => {
    event.preventDefault();
    if (this._inputTodo.value.length > 0){
      var newTodo = this._inputTodo.value;
      if (this.state.todos.includes(newTodo) === false){
        this.setState((prevState) => {
          return {
            todos: prevState.todos.concat(newTodo)
          };
        });
      } 
    }
    this._inputTodo.value = ''; // set input to be empty again
  }

  removeItem = (itemToBeDeleted) => {
    var newTodos = this.state.todos.filter((_item) => {
      return _item !== itemToBeDeleted;
    });
    this.setState({todos: newTodos});
  }

  clearTodos = () => {
    var clearTodos = [];
    this.setState({todos: clearTodos})
  }

  getInitialTodos = () => {
    this.setState({
      todos: [
        'mopping',
        'haircut',
        'cooking'
      ]});
    }

  constructor(props){
    super(props);
    this.state = {
      todos: [
        'mopping',
        'haircut',
        'cooking'
      ]
    };
  }

  render(){
    return(
      <div className="Blah">
        <form onSubmit={ this.saveNewItem }>
          <input type="text" ref={ (a) => this._inputTodo = a} placeholder="create new todo" /><br />
          <button type="submit" className="btn btn-lg btn-primary">Enter New Item</button><br />
        </form>
        <DisplayList
          removeItem={ this.removeItem }
          todos={ this.state.todos }
        />

        <div className="bottom-buttons">
          <button id="resetTodosBtn" className="btn btn-lg btn-primary" onClick={ this.getInitialTodos }>Get Initial Todos</button>
          <button id="clearTodosBtn" className="btn btn-lg btn-primary" onClick={ this.clearTodos }>Clear all Todos</button>
        </div>

      </div>
    );
  }
}

