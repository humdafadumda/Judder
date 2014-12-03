module.exports.requiresLogin = function (request, response, next) {
  if (!request.isAuthenticated()) {
    request.session.returnTo = request.originalUrl
    return response.redirect('#/login')
  }
  next()
}