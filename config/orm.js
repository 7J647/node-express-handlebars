// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.


var connection = require("../config/connection.js");
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  
  function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
  

// * Export the ORM object in `module.exports`.


module.exports = orm;