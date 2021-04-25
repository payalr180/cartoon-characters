import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartoons: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(urlData => this.setState({ cartoons: urlData.results }));
  }

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {cartoons, searchField} = this.state;

    const filteredCartoons = cartoons.filter(cartoon =>
      cartoon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Rick and Morty</h1>
        <SearchBar 
          placeholder = "Search Cartoons"
          handleChange = { this.changeHandler }/>
        <br />
        <CardList cartoons={ filteredCartoons }/>
      </div>
    );
  }
}

export default App;
