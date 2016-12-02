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
    // var output = ""
    // this.inventory.forEach(function(record) {
    //   output += record.toString;
    // });
    // return output;
    return this.inventory.reduce(function(a , b){
      return a + b
    });
  },

}

module.exports = RecordStore;