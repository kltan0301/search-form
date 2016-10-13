import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  handleSearchChange(searchTerm) {
    console.log(searchTerm);
  }
  render() {
    return (
      <div className="searchBar">
        <SearchBar onSearchChange={this.handleSearchChange}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
