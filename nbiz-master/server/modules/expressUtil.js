/**
 * Module dependencies.
 */
; var express = require( 'express' )
  , mongoStore = require( 'connect-mongo' )( express )
  , flash = require( 'connect-flash' )
  , helpers = require( 'view-helpers' )
  , path = require('path')
  , root = path.normalize(__dirname + '/..')

; module.exports = function ( app, config, passport, application, env ) {

  ; app.set( 'showStackError', true )
  // should be placed before express.static
  ; app.use( express.compress( {
    filter: function ( req, res ) {
      ; return /json|text|javascript|css/.test(res.getHeader('Content-Type' ) )
    },
    level: 9
  }))

  ; console.log("ENVIRONMENT:")
  ; if ( env === 'development' ) {
    ; console.log('development')
    // .temp- is mounted before public-directory to shadow its contents
    // TODO: Make this work with an envirment variable to only mount
    // temp when server is running in development mode
    ; app.use( "/styles", express.static( application.path.temp.style ) )
    ; app.use( "/fonts", express.static( application.path.temp.font ) )
    ; app.use( "/views", express.static( application.path.temp.view ) )

    // TODO: Check how to fix this, so thta paths for files from
    ; app.use( "/", express.static( application.path.client.root ) )
    ; app.use( "/", express.static( application.path.bower ) )
    // Add path for npm package for zurb-foundation framework. Its received via npm
    // because npm has official sass/stylus repository 
    ; app.use( "/foundation", express.static( application.path.node + 'foundation' ) )
    // Add path for npm package for hubspot-signet developer-console plugin. Its received via npm
    // because it's not registered at bower and npm yet. But npm also takes a github tar-ball target
    // as valid import directive.
    ; app.use( "/Signet", express.static( application.path.node + 'Signet' ) )
  }

  // don't use logger for test env
  ; if ( env !== 'test' ) {
    ; console.log("Logger disabled for testing environment!")
    ; app.use( express.logger('dev' ) )
  }

  // set views path and template engine
  ; app.set( 'views', configuration.path.server.view )
  ; app.set( 'view engine', configuration.common.viewEngine )
  
  // enable jsonp
  ; app.enable( "jsonp callback" )

  // pass variables to jade-templates
  ; app.use(function(req, res, next){
    ; res.locals.data.environment = environment
    ; res.locals.data.configuration = configuration
    ; next();
  })

  ; app.configure( function (  ) {
    // dynamic helpers
    ; app.use( helpers( configuration.name ))

    // cookieParser should be above session
    ; app.use( express.cookieParser(  ))

    // bodyParser should be above methodOverride
    ; app.use( express.bodyParser(  ))
    ; app.use( express.methodOverride(  ))

    // express/mongo session storage
    ; app.use( express.session( {
      secret: 'ForgeHome$#32'
      , store: new mongoStore( {
        url: environment.db
        , collection : 'sessions'
      })
    }))

    // connect flash for flash messages
    ; app.use( flash(  ))

    // use passport session
    ; app.use( passport.initialize(  ) )
    ; app.use( passport.session(  ) )

    // routes should be at the last
    ; app.use( app.router )

    // assume "not found" in the error msgs
    // is a 404. this is somewhat silly, but
    // valid, you can do whatever you like, set
    // properties, use instanceof etc.
    ; app.use( function( err, req, res, next ){
      // treat as 404
      ; if ( ~err.message.indexOf( 'not found' ) ){
        ; return next(  )
      } 
      // log it
      ; console.error( err.stack )
      // error page
      ; res.status( 500 ).render( '500' , { 
        error: err.stack, 
        user: {
          groups: [ 'default' ]
        }
      })
    })
    // assume 404 since no middleware responded
    ; app.use( function( req, res, next ) {
      ; res.status( 404 ).render( '404' , { 
        url: req.originalUrl
        , error: 'Not found'
        , user: {
          groups:[ 'default' ]
        }
      })
    })
  })
}