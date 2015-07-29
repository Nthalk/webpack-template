var Router = require('react-router');
var routes = require('./routes');

module.exports = Router.create({
  routes: routes,
  location: Router.HashLocation
});
