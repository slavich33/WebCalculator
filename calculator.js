const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.listen(port, function() {
  console.log("Server started at port 3000");
});

app.get("/", function(req,res) {
// res.sendFile(__dirname) will show you where this file hosted
// console.log(__dirname);
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res) {

// console.log(req.body.num1);

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

  res.send("Your calculated result is " + result);
});

app.get("/bmicalculator", function(req,res) {
  res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator", function(req,res) {
  var wght = parseFloat(req.body.wght);
  var hght = parseFloat(req.body.hght);

  var bmi = (wght / (hght * hght))* 10000;
                  // Math.pow(hght, 2)
  res.send("Your bmi is a " + bmi);
})
