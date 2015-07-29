var Reflux = require('reflux');
var WidgetsActions = require('./widgets_actions');
var axios = require("axios");

var API_PREFIX = "/api/widgets";


axios.interceptors.request.use(function (config) {
  if(config.url.startsWith(API_PREFIX)){
    return [1,2,3];
  }
  return config;
});

// Create our store
module.exports = Reflux.createStore({
  listenables: WidgetsActions,
  onQuery(query){
    WidgetsActions.query.promise(axios.get(API_PREFIX, {
      params: query
    }))
  },
  onCreate(widget){
    WidgetsActions.create.promise(axios.post(API_PREFIX, {
      data: widget
    }));
  }
});
