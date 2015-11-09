var AutoComplete = React.createClass ({
  getInitialState: function (){
    return { results: [] };
  },

  render: function () {
    var results = this.state.results;
    var liNames = [];
    for (var i = 0; i < results.length; i++){
      liNames.push(<li>{results[i]}</li>);
    }
    return (
      <div>
        <input onChange={this.search} type="text"/>
        <ul>
          {liNames}
        </ul>
      </div>
    );
  },

  search: function (e) {
    if(typeof e === 'undefined'){
      return [];
    }
    var searchQuery = e.currentTarget.value;
    var searchResults = [];
    for (var i = 0; i < this.props.names.length; i++) {
      var check = this.props.names[i].slice(0,searchQuery.length);
      if (check === searchQuery) {
        searchResults.push(this.props.names[i]);
      }
    }
    this.setState({results: searchResults});
    this.render;
  }

});
