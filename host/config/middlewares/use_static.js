module.exports = function (server, settings) {

  var express = require('express');

  settings.statics.forEach(function (item, index) {
    server.use(item.folder, express.static(item.path));
  });
};