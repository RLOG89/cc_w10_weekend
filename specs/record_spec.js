var Record = require('../record');
var assert = require('assert');

var record = new Record("John Lennon", "Imagine", 10);

describe('record', function() {

  it('should have an artist', function() {
    assert.equal("John Lennon", record.artist)
  });

  it('should have a title', function() {
    assert.equal("Imagine", record.title)
  });

  it('should have a price', function() {
    assert.equal(10, record.price)
  });

});

