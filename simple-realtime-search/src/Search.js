import React, { Component } from 'react';
import DisplayList from './DisplayList';
import axios from 'axios';

class Search extends Component {
  
  getItems = async () => {
    try {
      var res = await axios.get(`https://gist.githubusercontent.com/rogargon/5534902/raw/c6534d17e48d5e9fbf4ebe2819654c0395db9075/countries.json`);
      var arr = res.data;
      this.initialList = arr;
      this.setState(
        {
         list: arr
        });
    } catch (exception) {
      console.log(exception);
    }
  }

  filteredList = (event) => {
    var charInput = event.target.value.toLowerCase();
    var updatedList = this.initialList;
      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().search(charInput) !== -1;
      });
      this.setState({list: updatedList});
  }

  async componentDidMount(){
    await this.getItems();
  }

  constructor(props){
    super(props);
    this.initialList = [];
    this.state = {
      list: []
    };
  }

  render(){
    return(
      <div className="searchComp">
        <h2>Search:</h2>
        <form className="form-group">
          <input className="form-control" type="text" placeholder="Search the list with React"
            onChange={ this.filteredList }/>
        </form>
        <DisplayList list={ this.state.list }/>
      </div>
    );
  }
}

export default Search;
