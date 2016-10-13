import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import PlaceList from './components/PlaceList';
import request from 'superagent';
import './styles/app.css';
import { Button } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      predictions: [
        // {description:"america"},
        // {description:"Singapore"},
        // {description:"China"},
        // {description:"South Korea"},
      ]
    }
  }
  handleSearchChange(searchTerm) {
    const url = `https://crossorigin.me/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchTerm}&key=AIzaSyA8Ym4Z22s2mhNISM18ef_8kldnDA_gXtM`;
    //retrieve predictions
    request.get(url, (err, res) => {
      this.setState({ predictions : JSON.parse(res.text).predictions});
    });
  }

  render() {
    return (
      <div className="searchBar">
        <div className="carousel">
          <SearchBar className="searchBar" onSearchChange={searchTerm => this.handleSearchChange(searchTerm)}/>
          <Button bsStyle='success'>
                      Search
                  </Button>
          <PlaceList places={this.state.predictions}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
