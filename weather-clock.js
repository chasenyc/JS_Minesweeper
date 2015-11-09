var Clock = React.createClass ({
  getInitialState: function (){
    return { time: new Date () };
  },

  render: function () {
    // debugger;
    return (
      <div>
        {this.state.time.toString()}
      </div>
    );
  },

  componentDidMount: function () {
    this.handle = setInterval(this.resetDate, 20);
  },

  componentWillUnmount: function () {
    clearInterval(this.handle);
    this.handle = 0;
  },

  resetDate: function () {
    this.setState({time: new Date ()});
  }

});

var Weather = React.createClass({

  locationError: function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  },

  locationSuccess: function(pos){
    var crd = pos.coords;
    this.queryWeather(pos);
  },

  getInitialState: function (){
    return { location: navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError), temp: 0, weather: ""};
  },

  queryWeather: function (pos) {
    var urlStr = "http://api.openweathermap.org/data/2.5/find?lat=" +
    pos.coords.latitude + "&lon=" + pos.coords.longitude + "&cnt=10" +
    "&APPID=2de143494c0b295cca9337e1e96b00e0";

    var request = new XMLHttpRequest();
    request.open('GET', urlStr, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = JSON.parse(request.responseText);
        var weatherStr = resp.list[0].weather[0].description;
        var tempStr = resp.list[0].main.temp;
        this.setState({ weather: weatherStr, temp: tempStr });
      } else {
        // We reached our target server, but it returned an error

      }
    }.bind(this);

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },

  render: function () {
    return (
      <div>
        <h1>Weather: {this.state.weather}</h1>
        <h2>Temp: {this.state.temp}</h2>
      </div>
    );
  },





});
