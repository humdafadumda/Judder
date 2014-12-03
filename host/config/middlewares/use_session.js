module.exports = function (server) {
  server.use(require('express-session')({
    secret: 'ihateeverythingbut',
    resave: false,
    saveUninitialized: true
  }));
};