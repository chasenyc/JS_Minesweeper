var AutoComplete = React.createClass ({
  getInitialState: function (){
    return { search: "" };
  },

  render: function () {
    var searchResults = [];
    for (var i = 0; i < this.props.names.length; i++) {
      var check = this.props.names[i].slice(0,this.state.search.length);
      if (check === this.state.search) {
        searchResults.push(this.props.names[i]);
      }
    }

    if (this.state.search === "") { searchResults = []; }

    var liNames = [];
    for (var i = 0; i < searchResults.length; i++){
      liNames.push(<li onClick={ this.setQuery }>{searchResults[i]}</li>);
    }
    return (
      <div>
        <input onChange={this.setSearch} type="text" value={this.state.search}/>
        <ul>
          {liNames}
        </ul>
      </div>
    );
  },

  setQuery: function (e) {
    var query = e.currentTarget.innerHTML;
    this.setState({search: query});
  },

  setSearch: function (e) {
    var searchQuery = e.currentTarget.value;
    this.setState({search: searchQuery});
  }

});
