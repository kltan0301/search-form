import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: ''};
  }
  //function to trigger on value change of input box
  onInputChange(search) {
    this.setState({search});
    this.props.onSearchChange(search);
  }
  //add searchbar into app
  render() {
    return (
      <div className="searchBar">
        <input placeholder="Type place here" onChange={e => this.onInputChange(e.target.value)}/>
      </div>
    )
  }
}
//react's equivalent of module.exports
export default SearchBar;
