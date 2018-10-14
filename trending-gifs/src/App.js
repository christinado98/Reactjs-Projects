import React, { Component } from 'react';
import './App.css';
import DisplayList from './DisplayList';

class App extends Component {

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({randomInd: ''})
    var input = event.target.value;
    input = input.replace(/ /g, "+");
    this.setState({query: input});
    let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=Rk2IXfmAG3XAmU7OTHAdJV6vP6RdIdgq`;
    this.fetchData(url);
  }

  handleTrending = (event) => {
    event.preventDefault();
    this.setState({randomInd: ''})
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=Rk2IXfmAG3XAmU7OTHAdJV6vP6RdIdgq`;
    this.fetchData(url)
  }

  fetchData = async (url) => {
    var result;
    try {
      var res = await window.fetch(url);
      if (res.ok){
        result = await res.json();
      } else {
        console.log(`${res.status}: ${res.statusText}`)
      }
    } catch (exception) {
      console.log(exception.statusText);
    }
    var arr = result.data;
    this.setState({returnList: arr});
  }

  pickRandom = () => {
    if (this.state.returnList.length > 0){
      var randomInd = Math.floor(Math.random() * this.state.returnList.length);
      this.setState({ randomInd: randomInd });
    }
  }

  reverse = () => {
    if (this.state.randomInd === ''){
      var newList = this.state.returnList.reverse();
      this.setState({returnList: newList});
    }
  }

  clearAll = () => {
    this.setState({randomInd: '', returnList: []});
  }

  handleSearchChange = (event) => {
    this.setState({query: event.target.value});
  }

  constructor(props){
    super(props);
    this.state = {
      query: '',
      returnList: [],
      randomInd: ''
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Trending GIFs of the <a href="https://developers.giphy.com/">Giphy API</a></h1>
        <form className="form-inline">
          <label>Search GIFs: </label>
          <input type="text" onChange={ this.handleSearchChange } className="form-control mb-2 mr-sm-2 mb-sm-0"/>
          <button onClick={this.handleSearch} className="btn btn-md btn-primary searchBtn">Search</button>
        </form>
        
        <div className="buttons">
          <button onClick={ this.handleTrending } className="btn btn-lg btn-primary">Load (or Reload) Trending Gifs</button>
          <br />
          <button onClick={ this.pickRandom } className="btn btn-lg btn-primary">Pick One Randomly</button>
          <br />
          <button onClick={ this.reverse } className="btn btn-lg btn-primary">Reverse Order</button>
          <br />
          <button onClick={ this.clearAll } className="btn btn-lg btn-primary">Clear All</button>
        </div>

        <DisplayList list={ this.state.returnList } index={ this.state.randomInd }/>
      </div>
    );
  }
}

export default App;
