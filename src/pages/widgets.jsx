var React = require('react');
var Reflux = require('reflux');
module.exports = React.createClass({
  mixins: [Reflux.ListenerMixin],
  render(){
    return <div>Widgets!</div>
  }
});
