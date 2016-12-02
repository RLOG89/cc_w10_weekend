var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },
  listInventory: function() {
    this.inventory.forEach(function(record) {
      console.log(record)
    });
  },

}

module.exports = RecordStore;