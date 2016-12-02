var Record = require('../record');
var assert = require('assert');

var record = null;

describe('record', function() {

record = new Record("John Lennon", "Imagine", 10);

  it('should have an artist', function() {
    assert.equal("John Lennon", record.artist)
  });

  it('should have a title', function() {
    assert.equal("Imagine", record.title)
  });

  it('should have a price', function() {
    assert.equal(10, record.price)
  });

  it('should have a toString method', function() {
    assert.equal("Imagine by John Lennon, priced at £10", record.toString());
  });

});

