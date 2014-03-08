; var mongoose = require( 'mongoose' )
  , async = require( 'async' )
  , Class = mongoose.model( 'Class' )
  , _ = require( 'lodash' )

; exports.create = function ( req, res ) {
  ; var classObject = new Class( )
  ; classObject.name = req.body.name
  ; classObject.save()
  ; res.jsonp( classObject )
}

; exports.show = function( req, res ){
  ; res.jsonp( req.class );
}
; exports.view = function( req, res, next, id ){
  ; Class.load( id, function( err, classObject ){
    ; if ( err ){
      ; return next( err )
    } 
    ; if ( !classObject ){
      ; return next( new Error( 'Failed to load class: ' + id ) )
    } 
    ; req.classObject = classObject
    ; next()
  })
}
; exports.all = function( req, res ){
  ; Class.find()
    .populate( 'classType' )
    .exec( function( err, classObject ){
    ; if ( err ) {
      ; res.render('error', { status: 500 } )
    } else {      
      ; res.jsonp( classObject )
    }
  })
}
; exports.update = function( req, res ){
  ; var classObject = req.classObject
  ; classObject = _.extend( classObject, req.body )
  ; classObject.save( function( err ) {
    ; res.jsonp( classObject )
  })
}
; exports.destroy = function( req, res ){
  ; var Class = req.classObject
  Class.remove( function( err ){
    ; if ( err ) {
      ; res.render( 'error', { status: 500 } )
    } else {
      ; res.jsonp( 1 )
    }
  })
}