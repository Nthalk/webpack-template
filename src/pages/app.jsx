var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Navbar = require('../components/navbar');

module.exports = React.createClass({
  render () {
    return <div>
      <Navbar/>
      <RouteHandler/>
    </div>;
  }
});
