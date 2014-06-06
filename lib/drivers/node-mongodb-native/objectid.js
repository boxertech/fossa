
/*!
 * [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) ObjectId
 * @constructor NodeMongoDbObjectId
 * @see ObjectId
 */

//var ObjectId = require('mongodb').BSONPure.ObjectID;
function ObjectId(id) {
  this.id = "";
  if (id){
    this.id = id;
  }
}

ObjectId.prototype.toHexString = function(){
  return id;
};
ObjectId.prototype.equals = function(other){
  return (other == id);
};
ObjectId.prototype.isValid = function(){
  return false;
};
ObjectId.prototype.createFromHexString = function(hexString){
  this.id = hexString;
  return this;
}
ObjectId.prototype.toString = function(){
  return id || "";
};

module.exports = exports = ObjectId;

