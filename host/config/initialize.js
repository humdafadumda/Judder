
module.exports = function (server) {

  require('./middlewares/use_compression')(server);

  var settings = require('./settings');

  if (settings.useStatic) {
    require('./middlewares/use_static')(server, settings);
  }

  require('./middlewares/use_cookieparser')(server);

  require('./middlewares/use_bodyparser')(server);


  require('./middlewares/use_compression')(server);
  require('./middlewares/use_methodoverride')(server);
  require('./middlewares/use_passport')(server);
  require('./middlewares/use_session')(server);

  //settings.middlewares.forEach(function (item, index)
  //{
  //  require(item)(server);
  //});

  server.set('port', settings.port);
  
  server.set('view engine', settings.viewEngine);
  server.engine(settings.viewEngine, settings.engine);  //{ layoutsDir: config.views + 'scripts/judder/templates' }
  server.set('views', settings.views);

  if (settings.viewsCache)
    server.set('view cache');

  return settings;
};