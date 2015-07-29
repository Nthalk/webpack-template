var React = require('react');
var Reflux = require('reflux');
var WidgetsStore = require('../stores/widgets_store');

module.exports = React.createClass({
  mixins: [Reflux.ListenerMixin],

  click(){
    WidgetsStore.Actions.addItem();
  },
  render(){
    return <div><a href="#" onClick={this.click}> Widgets!</a></div>
  }
});
