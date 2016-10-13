import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div class="searchBar">
        <p>Search bar comes here</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
