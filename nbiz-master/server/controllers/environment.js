; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , Environment = mongoose.model( 'Environment' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var environment = new Environment( )
  ; environment.name = req.body.name
  ; environment.save()
  ; res.jsonp( environment )
}

; exports.show = function( req, res ){
  ; res.jsonp( req.environment );
}

; exports.view = function( req, res, next, id ){
  ; Environment.load( id, function( err, environment ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !environment ){
      ; return next( new Error( 'Failed to load environment ' + id ) )
    } 
    ; req.environment = environment
    ; next()
  })
}
; exports.all = function( req, res ){
  ; Environment.find()
    .populate( 'environmentType' )
    .exec( function( err, environment ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } )
    } else {      
      ; res.jsonp( environment )
    }
  })
}
; exports.update = function( req, res ){
  ; var environment = req.environment
  ; environment = _.extend( environment, req.body )
  ; environment.save( function( err ) {
    ; res.jsonp( environment )
  })
}
; exports.destroy = function( req, res ){
  ; var environment = req.environment
  Environment.remove( function( err ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } )
    } else {
      ; res.jsonp( 1 )
    }
  })
}