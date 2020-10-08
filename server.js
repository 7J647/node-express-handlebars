const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");
// const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "PootyGasser5%",
//   database: "movie_planner_DB"
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

//views routes
app.get("/", (req,res) => {
    connection.query("SELECT * FROM burger", (err, data) => {
        console.table(data);
    })
    res.render("index", {name: "Jeff"});
});

//api routes




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });