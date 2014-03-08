; var async = require('async')

; module.exports = function ( app, passport, auth, application, env ) {
  // user routes
  ; var users = require('./../controllers/users')
  ; app.get( '/signin', users.signin )
  ; app.get( '/signup', users.signup )
  ; app.get( '/signout', users.signout )
  ; app.post( '/users', users.create )
  ; app.post( '/users/session', passport.authenticate( 'local', { failureRedirect: '/signin', failureFlash: 'Invalid email or password.' } ), users.session )
  ; app.get( '/users/me', users.me )
  ; app.get( '/users/:userId', users.show )
  ; app.param('userId', users.user)
  
  ; app.post('/github', users.user)

  //TODO: Auto-Generate routes for mapping with api-controllers

  // Example routes 
    // Import Controller
    // var fantasyteams = require('./../controllers/fantasyteams')  
    // app.get('/fantasyteams', fantasyteams.all)
    // app.post('/fantasyteams', auth.requiresLogin, fantasyteams.create)
    // app.get('/fantasyteams/:fantasyTeamId', fantasyteams.show)
    // app.put('/fantasyteams/:fantasyTeamId', auth.requiresLogin, fantasyteams.update)
    // app.del('/fantasyteams/:fantasyTeamId', auth.requiresLogin, fantasyteams.destroy)

  // app.param('fantasyTeamId', fantasyteams.fantasyteam)

  // home route
  ; var index = require('./../controllers/index')
  ; app.get('/', index.index )

}