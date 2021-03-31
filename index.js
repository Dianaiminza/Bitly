"use strict";
var express = require('express');
var cors = require('cors');
var linkrouter=require('./route/link');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/link",linkrouter)
app.use(cors());

app.listen(5000, function(){
  console.log("server is listening on port: 5000");
});
module.exports = app;