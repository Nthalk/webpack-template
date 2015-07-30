var React = require('react');
var Reflux = require('reflux');
var WidgetsActions = require('../stores/widgets_actions');
var WidgetsStore = require('../stores/widgets_store');

module.exports = React.createClass({
  mixins: [Reflux.connect(WidgetsStore, 'widgets')],

  click() {
    WidgetsActions.query();
  },
  render() {
    return <div><a onClick={this.click}> Widgets!</a></div>
  }
});
