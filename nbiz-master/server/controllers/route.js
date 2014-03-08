; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , Route = mongoose.model( 'Route' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var route = new Route( )
  ; route.name = req.name
  ; route.content = req.content
  ; route.routes = req.routes
  ; route.project = req.project
  ; route.save()
  ; res.jsonp( route )
}
; exports.show = function( req, res ){
  ; res.jsonp( req.route );
}
; exports.view = function( req, res, next, id ){
  ; Route.load( id, function( err, route ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !route ){
      ; return next( new Error( 'Failed to load route ' + id ) )
    } 
    ; req.route = route
    ; next(  )
  })
}
; exports.all = function( req, res ){
  ; Route.find()
    .lean()
    .populate( 'content' )
    .populate( 'routeType' )
    .populate( 'routes' )
    .populate( 'project' )
    .exec( function( err, routes ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } );
    } else {      
      ; console.log( routes );
      // ; res.jsonp( routes );
    }
  })
}
; exports.update = function( req, res ){
  ; var route = req.route
  ; route = _.extend( route, req.body )
  ; route.save( function( err ) {
    ; res.jsonp( route )
  })
}
; exports.destroy = function( req, res ){
  ; var route = req.route
  ; route.remove( function( err ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } );
    } else {
      ; res.jsonp( 1 );
    }
  })
}