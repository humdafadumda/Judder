//initialize and hook the expressJS framework
var express = require('express');

// initialize server settings
var judderServer = express();

var settings= require('./config/initialize')(judderServer);
//console.log(judderServer);

/*Start http server and listen for requests*/ //(openshift needs further investigation)
var host = process.env.OPENSHIFT_NODEJS_IP || settings.host || 'localhost';

judderServer.listen(settings.port, host, function () {
  
  console.log('listening on:' + host + ':' + settings.port);
  console.log('At your service!');

});