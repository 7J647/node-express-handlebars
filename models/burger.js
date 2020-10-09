// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgerstable", function(res) {
      cb(res);
    });
  },

  
  // The variables cols and vals are arrays.
  create: function(burgerName, cb) {
    orm.create("burgerstable", burgerName, function(res) {
      cb(res);
    });
  },

//   updateOne: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }
};

// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevoured = $(this).data("newdevoured");
  
//       var newDevouredState= {
//         devoured: newDevoured
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/cats/" + id, {
//         type: "PUT",
//         data: newSleepState
//       }).then(
//         function() {
//           console.log("changed sleep to", newSleep);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//         $(".create-form").on("submit", function (event) {
//             // Make sure to preventDefault on a submit event.
//             event.preventDefault();

//             var newBurger = {
//                 name: $("#ca").val().trim(),
//             };

//             // Send the POST request.
//             $.ajax("/api/burgers", {
//                 type: "POST",
//                 data: newBurger,
//             }).then(
//                 function () {
//                     console.log("created new burger");
//                     // Reload the page to get the updated list
//                     location.reload();
//                 }
//             );
//         });
//     })

// Export the database functions for the controller (catsController.js).
module.exports = burger;
