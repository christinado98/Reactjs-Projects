import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  handleFirstName = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleLastName = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleBirth = (event) => {
    this.setState({birth: event.target.value});
  }

  handleFromWhere = (event) => {
    this.setState({fromWhere: event.target.value});
  }

  handleFormOne = () => {
    var firstName = this.refs.firstName.value;
    var lastName = this.refs.lastName.value;
    this.setState({
      firstName: firstName,
      lastName: lastName,
      formOneDisplay: 'none',
      formTwoDisplay: ''
    });
  }

  handleFormTwo = () => {
    var birthInput = this.refs.birth.value;
    var fromWhereInput = this.refs.fromWhere.value;
    var birth;
    var fromWhere;
    if (birthInput.length === 0){
      birth = 'We couldn\'t understand your birthday...'
    } else {
      var date = new Date();
      var year = date.getFullYear();
      var newBirth = year - birthInput;
      birth = 'You are: ' + newBirth + ' years old';
    }
    if (fromWhereInput === ''){
      fromWhere = 'We couldn\'t understand where you are from...'
    } else {
      fromWhere = 'You come from: ' + fromWhereInput;
    }
    this.setState({
      birth: birth,
      fromWhere: fromWhere,
      formTwoDisplay: 'none',
      resultFormDisplay: ''
    })
  }

  reset = () => {
    this.setState({
      firstName: '',
      lastName: '',
      birth: '',
      fromWhere: '',
      formOneDisplay: '',
      formTwoDisplay: 'none',
      resultFormDisplay: 'none'
    })
  }

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birth: '',
      fromWhere: '',
      formOneDisplay: '',
      formTwoDisplay: 'none',
      resultFormDisplay: 'none',
    }
  }
  render() {
    var formOne;
    var formTwo;
    var resultForm;
    
    if (this.state.formOneDisplay === ''){
      formOne=<form onSubmit={ this.handleFormOne } className="container form-group">
      <h2>Type your first name:</h2>
      <input type="text" ref="firstName" onChange={ this.handleFirstName } className="form-control"/>
      <h2>Type your last name:</h2>
      <input type="text" ref="lastName" onChange={ this.handleFirstName } className="form-control"/><br />
      <button type="submit" className="btn btn-lg btn-primary firstFormBtn">Next</button>
    </form>
    } else if (this.state.formTwoDisplay === '' && this.state.formOneDisplay === 'none' && this.state.resultFormDisplay === 'none'){
      formTwo=<form onSubmit={ this.handleFormTwo } className="container form-group">
      <h2>Type your birth year:</h2>
      <input type="text" ref="birth" onChange={ this.handleBirth } className="form-control"/>
      <h2>Type where you come from:</h2>
      <input type="text" ref="fromWhere" onChange={ this.handleFromWhere } className="form-control"/><br />
      <button type="submit" className="btn btn-lg btn-primary secondFormBtn">Next</button>
    </form>
    } else if (this.state.resultFormDisplay === ''){
      resultForm=<div className="container">
        <h1>Hello { this.state.firstName} { this.state.lastName }!</h1>
        <br />
        <h2>{ this.state.birth }</h2>
        <br />
        <h2>{ this.state.fromWhere }</h2>
        <br />
        <button onClick={ this.reset } className="btn btn-lg btn-primnary resetButton">Reset Form</button>
      </div>
    }

    return (
      <div className="App">
        <h1>This is a simple form created with React</h1>
        { formOne }
        { formTwo }
        { resultForm }
      </div>
    );
  }
}

