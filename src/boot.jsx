// Styles
require("./style/main.scss");
require("bootstrap/dist/css/bootstrap.css");

var React = require('react');
var Router = require('./router');

// Bootstrap
Router.run((Root) => {
  React.render(<Root/>, document.body);
});

