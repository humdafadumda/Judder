//initiliaze http compression
module.exports = function (server) {

  var parser = require('body-parser');

  server.use(
    parser.json());
  server.use(
    parser.urlencoded(
    {
      extended: true
    }));
};