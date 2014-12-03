//initiliaze http compression
module.exports = function (server) {

  server.use(require('compression')());
};