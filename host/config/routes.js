var routes = {
  gets:
    [
      {
        path: '/',
        callbacks:
          [
            function (request, response) {
              alert('k');
              response.render('index');
            },
          ]
      }
    ],
  posts: [],
  deletes: [],
  puts: []
};

module.exports = routes;