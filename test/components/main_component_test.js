var MainComponent = require('../../src/components/main.jsx');

var assert = require("assert");
describe('MainComponent', function () {
  describe('#constructor()', function () {
    it('should be constructable', function () {
      var component = new MainComponent();
      assert(component != null);
    });
  });
});
