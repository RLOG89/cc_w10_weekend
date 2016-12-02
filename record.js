var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}

Record.prototype = {
  toString: function() {
    return this.title + " by " + this.artist + ", priced at £" + this.price; 
  }
}

module.exports = Record;