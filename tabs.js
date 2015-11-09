var Tabs = React.createClass ({
  getInitialState: function () {
    return { currentTab: 0 };
  },

  render: function () {
    var titles = [];
    for(var i = 0; i < this.props.tabularData.length; i++){
      if(i === this.state.currentTab){
        titles.push(<strong>{this.props.tabularData[i].title}</strong>);
      }
      else{
        titles.push(this.props.tabularData[i].title);
      }
    }
    return (
      <div>
      <p onClick={this.setSelect}>{titles}</p>
      <article>{this.props.tabularData[this.state.currentTab].content}</article>
      </div>
    );
  },

  setSelect: function(e){
    var current = e.target.innerHTML;
    for(var i = 0; i < this.props.tabularData.length; i++){
      if (current === this.props.tabularData[i].title) {
        this.setState({currentTab: i});
      }
    }
  },

  componentDidMount: function () {

  }
});
