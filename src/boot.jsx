// Styles
require('./style/main.scss');
require('bootstrap/dist/css/bootstrap.css');

var React = require('react');
var Router = require('./router');

// Bootstrap
function boot() {
  Router.run((Root) => {
    React.render(<Root/>, document.body);
  });
}

// Allow boot to be deferred
if (window._deferBoot) {
  window._deferBoot(boot);
} else {
  boot();
}
