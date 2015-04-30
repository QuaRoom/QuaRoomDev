var fs = require("fs");
var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var http = require('http');
//var gzippo = require('gzippo');
var q_a = 0;
var q_b = 0;

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder
app.get("/", function(request, response){ //root dir
});

app.get("/countUp", function(request, response) {
  if (Math.floor(Math.random()*2)) {
    if (q_a <= 59) q_a++;
  } else {
    if (q_b <= 67) q_b++;
  } response.send(true);
});

app.get("/getCountA", function(request, response) {
  response.send(q_a+"");
});

app.get("/getCountB", function(request, response) {
  response.send(q_b+"");
});

app.listen(port, host);


