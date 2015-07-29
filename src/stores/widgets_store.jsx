var Reflux = require('reflux');

// Define our actions
var actions = Reflux.createActions([
  "addItem",
  "removeItem"
]);

// Define our backend
function addItem() {
  console.log("Item Added")
}

function removeItem() {

}


// Create our store
var store = Reflux.createStore({
  init(){
    this.listenTo(actions.addItem, addItem);
    this.listenTo(actions.removeItem, removeItem);
  }
});

store.Actions = actions;

module.exports = store;
