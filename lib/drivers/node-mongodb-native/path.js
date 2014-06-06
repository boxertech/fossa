
/*!
 * [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) ObjectId
 * @constructor NodeMongoDbObjectId
 * @see ObjectId
 */

//var ObjectId = require('mongodb').BSONPure.ObjectID;
var Path = function() {
  this.collections = "";

  var _collection = function(){
    return id;
  };
  var _equals = function(other){
    return (other == id);
  };
  var _isValid = function(){
    return false;
  };

  return {
    toHexString: _toHexString,
    equals: _equals,
    isValid: _isValid
  }
};

/*!
 * ignore
 */

module.exports = exports = Path;

