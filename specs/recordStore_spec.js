var RecordStore = require('../RecordStore');
var Record = require('../Record');
var assert = require('assert');

describe('RecordStore', function() {

var ricks = null;
var wagonWheel = null;
var trains = null;

  beforeEach(function() {
    ricks = new RecordStore("Ricks", "Glasgow");
    wagonWheel = new Record("Old Crow Medicine Show", "Wagon Wheel", 5);
    trains = new Record("Porcupine Tree", "Trains", 10);
    ricks.addRecord(wagonWheel);
    ricks.addRecord(trains);
    ricks.balance += 1000;
  });

  it('should have a name', function() {
    assert.equal("Ricks", ricks.name);
  });

  it('should have a city', function() {
    assert.equal("Glasgow", ricks.city);
  });

  it('should have records in inventory', function() {
    assert.equal(2, ricks.inventory.length);
  });

  it('should add records to inventory', function() {
    var oneMoreTime = new Record("Daft Punk", "One More Time", 10);
    ricks.addRecord(oneMoreTime);
    assert.equal(3, ricks.inventory.length);
    assert.deepEqual(oneMoreTime, ricks.inventory[2]);
  });

  it('should have a bank balance', function() {
    assert.equal(1000, ricks.balance);
  });

});