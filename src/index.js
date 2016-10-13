import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import PlaceList from './components/PlaceList';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      predictions: []
    }
  }
  handleSearchChange(searchTerm) {
    const url = `https://crossorigin.me/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchTerm}&key=AIzaSyA8Ym4Z22s2mhNISM18ef_8kldnDA_gXtM`;

    request.get(url, (err, res) => {
      this.setState({ predictions : JSON.parse(res.text).predictions});
    });
  }

  render() {
    return (
      <div className="searchBar">
        <SearchBar onSearchChange={searchTerm => this.handleSearchChange(searchTerm)}/>
        <PlaceList places={this.state.predictions}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
