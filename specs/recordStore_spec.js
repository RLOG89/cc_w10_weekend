var RecordStore = require('../RecordStore');
var assert = require('assert');

var ricks = new RecordStore("Ricks", "Glasgow")

describe('RecordStore', function() {

  it('should have a name', function() {
    assert.equal("Ricks", ricks.name)
  });

  it('should have a city', function() {
    assert.equal("Glasgow", ricks.city)
  });

});