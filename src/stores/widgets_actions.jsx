var Reflux = require('reflux');

// Define our actions
module.exports = Reflux.createActions({
  create: {children: ["completed", "failed"]},
  query: {children: ["completed", "failed"]}
});
