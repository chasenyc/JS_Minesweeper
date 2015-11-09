var Game = React.createClass({
  getInitialState: function(){
    return {board: new Minesweeper.Board(10, 6)};
  },

  updateGame: function(){
    if(this.state.board.won()){
      alert("YOU WIN");
      this.restartGame();
    } else if (this.state.board.lost()) {
      alert("YOU LOSE")
      this.restartGame();
    }
    this.props.update();
  },

  render: function(){

    return (
      <div>
        <Board board={this.state.board} update={this.updateGame} />
      </div>
    );
  },

  restartGame: function(){
    this.setState({board: new Minesweeper.Board(10,6)});

  }

});

var Board = React.createClass({
  getInitialState: function(){
    return { yaya: ""};
  },

  render: function () {

    return (
      <div>
        {this.props.board.grid.map(function(el, i){
          return <div>{el.map(function(el2, j){
            return <Tile update={this.props.update} tileNum={j} el={el2}/>;
          }.bind(this))}</div>;
        }.bind(this))}
      </div>
    );
  },

  componentDidMount: function () {
  }
});

var Tile = React.createClass({
  getInitialState: function(){
    return { tile: this.props.el};
  },

  render: function () {
    var result;
    if (this.props.el.flagged === true) {
      result = '⚑';
    } else if (this.props.el.explored === false) {
      result = '▊';
    } else if (this.props.el.bombed === true ) {
      result = '💣';
    } else {
      result = this.props.el.adjacentBombCount();
    }
    return (
      <div onClick={this.reveal}>
        <tile>{result}</tile>
      </div>
    );
  },

  reveal: function (e){
    if(e.altKey===true){
      this.props.el.toggleFlag();
    }
    else{
      this.props.el.explore();
    }
    this.props.update();
  },

  componentDidMount: function () {

  }
});

// React.render();
