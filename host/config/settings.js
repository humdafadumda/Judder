var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

var settings = {
  judder: {
    root: rootPath,
    app: {
      name: 'Judder'
    },
    host: '',
    port: 666,
    db: '',
    compress: true,
    useStatic: true,
    statics: [
      {
        folder: '',
        path: path.join(rootPath + '/public'),
      }
    ],
    middlewares:
      [
        './middlewares/use_compression',
        './middlewares/use_bodyparser'
      ],
    views: rootPath,
    viewEngine: 'html',
    engine: require('express-handlebars')(),
    viewsCache: true,
    //routes: require('./routes')
  }
};


// inject the judder application config
module.exports = settings['judder'];