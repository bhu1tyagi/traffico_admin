




  console.log("Server has started!");
  res.render("dashboard", { username: username, password: password });
  res.render("index");
  res.render("newUser");
  res.render("register");
  var password = req.body.password;
  var username = req.body.username;
//   // res.sendFile("Pages/login-page.html");
//   console.log(username, password);
//   res.render("dashboard");
//   res.render("display");
//   res.render("trial", { name: name, email: email, password: password });
//   res.sendFile(path.join(__dirname + "/assets/Pages/login-page.html"));
//   var email = req.body.email;
//   var name = req.body.name;
//   var password = req.body.password;
//   var password = req.body.password;
//   var username = req.body.username;
// app.get("/dashboard", function(req, res) {
// app.get("/login", function(req, res) {
// app.post("/", function(req, res) {
// app.post("/newUser", function(req, res) {
// console.log(express.static(path.join(__dirname, "assets")));
// });
// });
// });
// });
app.get("/", function(req, res) {
app.get("/Pages/login-page.html", function(req, res) {
app.get("/register", function(req, res) {
app.listen(3000, function() {
app.post("/newUser", function(req, res) {
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));
var app = express();
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var request = require("request");
});
});
});
});
});