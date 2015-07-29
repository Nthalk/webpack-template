var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = require('./pages/app');
var About = require('./pages/about');
var Widgets = require('./pages/widgets');
var WidgetCreate = require('./pages/widgets_create');

module.exports = <Route handler={App}>
  <Route path="about" handler={About}/>
  <Route path="widgets" handler={Widgets}>
    <Route path="create" handler={WidgetCreate}/>
  </Route>
</Route>;
