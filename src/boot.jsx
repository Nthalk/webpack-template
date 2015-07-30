// Styles
require('bootstrap/less/bootstrap.less');
require('./style/main.scss');

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
